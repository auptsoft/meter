<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Meter extends Model
{
    protected $appends = [
        'power',
        'state',
        'lastUpdate'
    ];
    public function user() {
        return $this->belongsTo('App\User', 'meter_number', 'meter_number');
    }

    public function powerConsumed() {
        return $this->hasMany("App\PowerConsumed");
    }

    public function requests(){
        return $this->hasMany("App\MeterRequest");
    }

    public function getPowerAttribute() {
        return $this->powerConsumed()->get()->last();
    }

    public function getStateAttribute() {
        $pc = $this->powerConsumed()->get();
        if($pc->count() < 1) {
            return "Meter not started";
        } else {
            $last = $pc->last();
            if (Carbon::now()->diffInMinutes($last->updated_at) > 5) {
                return "Meter may be shutdown or faulty";
            } else {
                return "Meter is active";
            }
        }
    }

    public function getLastUpdateAttribute() {
        $pc = $this->powerConsumed()->get();
        if($pc->count() < 1) {
            return "No update yet";
        } else {
            return $pc->last()->updated_at->toRfc1123String();
            //Carbon::now()->to
        }
    }
}
