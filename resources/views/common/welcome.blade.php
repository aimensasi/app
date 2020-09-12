@extends('layouts.main')

@section('main')
	<h1 class="text-6xl font-thin text-center text-gray-600">{{ config('app.name') }}</h1>

	<h1 class="mt-10 text-6xl font-thin text-center text-gray-600">SQL => {{ env('APP_ENV') }} - {{ env('DATABASE_CONNECTION') }} - {{ config('database.default') }}</h1>
@endsection
