<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MeterRequest;

class MeterRequestController extends Controller
{

    public static function queueCommand(int $meter_id, string $command) {
        $mr = new MeterRequest;
        $mr->command = $command;
        $mr->meter_id = $meter_id;

        $mr->save();
        return ["success"=>$mr];
    }

    public function destroy($id)
    {
        //
    }
}
