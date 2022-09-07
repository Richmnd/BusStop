<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        return view('admin.dashboard');
    }

    public function users(){
        return view('admin.users');
    }

    public function buses(){
        return view('admin.buses');
    }

    public function routes(){
        return view('admin.routes');
    }

    public function settings(){
        return view('admin.settings');
    }
}
