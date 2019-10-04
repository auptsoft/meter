<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = [
        'meter',
    ];


    public function roles() {
        return $this->belongsToMany('App\Role');
    }

    public function meter() {
        return $this->hasOne('App\Meter', 'meter_number', 'meter_number');
    }

    public function getMeterAttribute() {
        return $this->meter()->get()->first();
    }
}
