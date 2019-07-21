<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeterRequest extends Model
{
    use SoftDeletes;

    public function meter() {
        return $this->belongsTo('App\Meter');
    }
}
