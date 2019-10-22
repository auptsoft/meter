
@extends('layouts.app')

@section('head')
    
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <h4> Load Balancing </h4>
        </div>
        <div class="row">
            <center>
              <div class="card">
                <div class="card-body">
                    <p style="color:gray"> Load balancing in carried out automatically by the system. </p>
                    <p> Click on the button below to manually initiate load balancing  </p>
                    <center> <button class="btn btn-sm btn-success"> Start Load Balancing </button> </center>
                </div>
              </div>
            </center>
        </div>
    </div>
@endsection