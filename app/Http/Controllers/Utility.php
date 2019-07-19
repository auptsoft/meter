<?php

namespace App\Http\Controllers;

class Utility extends Controller {
    public static function generalResponse($message, $data) {
        return ["message"=>$message, "data"=>$data];
    }
}