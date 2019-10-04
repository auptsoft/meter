@extends('layouts.app')

@section('head')
<script src="{{ asset('js/Chart.bundle.js') }}"> </script>
<style>
  .meter-item {
	  padding :10px;
	  margin : 10px;
  }
</style>

@endsection

@section('content')
    <section class="service-area section-gap" >
		<all-staffs-component> </all-staffs-component>
	</section>
@endsection