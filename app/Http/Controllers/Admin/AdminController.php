<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        return view('admin.layouts.admin');
    }

    public function users(){
        $users = User::all();
        return json_decode($users);
    }
}
