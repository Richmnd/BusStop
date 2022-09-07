@extends('admin.layouts.admin')
@section('content')
    <h2>Hi, {{Auth::user()->name}}</h2>
@endsection