<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MeterRequest;
use App\Meter;

class MeterRequestController extends Controller
{

    public static function queueCommand(int $meter_id, string $command) {
        $mr = new MeterRequest;
        $mr->command = $command;
        $mr->meter_id = $meter_id;

        $mr->save();
        return ["message"=>"success"];
    }

    public function shutdownCommand($meter_id, int $onOff) {
        $meter = Meter::find($meter_id);
        if($meter) {
            $degn = $meter->designation;
            $d = MeterRequestController::appendZeros($degn."", 5);
            $cmd = "00#".$d."#S#".$onOff;
            return MeterRequestController::queueCommand($meter_id, $cmd);
        } else {
            return ["message"=>"failed", "data"=>"meter not found"];
        }
    }

    public function rechargeCommand($meter_id, int $amount) {
        $meter = Meter::find($meter_id);
        $out = MeterRequestController::appendZeros("".($amount*10), 6);
        if($meter) {
            $degn = $meter->designation;
            $d = MeterRequestController::appendZeros($degn."", 5);
            $cmd = "00#".$d."#L#".$out;
            return MeterRequestController::queueCommand($meter_id, $cmd);
        } else {
            return ["message"=>"failed", "data"=>"meter not found"];
        }
    }

    public function destroy($id)
    {
        $mr = new MeterRequest;
        if ($mr){
            $mr->delete();
        }
    }

    public static function appendZeros(string $inputStr, int $noOfChars) {
        while (strlen("$inputStr") < $noOfChars) {
            $inputStr = '0'.$inputStr;
        }
        return $inputStr;
    }
}
