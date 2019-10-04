<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::post('/personal_token', function(Request $request){
    $email = $request->input('email');
    $password = $request->input('password');

    /*$user = App\User::where('email', $email)
    ->where('password', $password)
    ->get()->first(); //->createToken('App personal')->accessToken; */

    if(Auth::attempt(['email'=>$email, 'password'=>$password])) {
        return Auth::user()->createToken('App personal')->accessToken;
    } else {
        return "error";
    }

    
});

Route::post('/upload', function(Request $request){
    return $request->file('upload')->store('uploads');
});

Route::get('/path', function(){
    return Storage::url('uploads/BlhBHuIxQYvFHZLnn2BfwynNiSakzCw4gKbkp3kg.jpeg');
});

Route::put('/user', function(Request $request){
    return App\User::find($request->input('id'));
});

Route::delete('/user', function(Request $request){
    return App\User::find($request->input('id'))->name." deleted";
});

Route::get('/meter', "MeterController@index");

Route::post('/gatewa', 'RequestController@gateway');
Route::post('/gateway', 'RequestController@gate');

Route::get('/test', function() {
    return "new";
});

Route::get('/meter/{id}', 'MeterController@meterApi' );

Route::get('/meter/powerConsumption/{meter_id}', "PowerConsumedController@forMeter");

Route::get('/meter/{id}/shutdown', "MeterController@shutdown");
Route::get('/meter/{id}/start', "MeterController@start");

Route::post('/http/get', "RequestController@sendGetRequest");

Route::get('/test', function(Request $request){
    //return "hello";
    return $request;
});

Route::get('/meter/queueOnOff/{id}/{onOff}', "MeterRequestController@shutdownCommand");

Route::get('/all_customers', 'UserController@api_allCustomers');
Route::get('/all_staffs', 'UserController@api_allStaffs');

Route::delete('/deleteCustomer/{id}', 'UserController@deleteCustomer');

Route::post('/updateMeter', 'MeterController@updateMeter');