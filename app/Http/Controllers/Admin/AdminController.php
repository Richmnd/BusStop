<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bus;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index(){
        return view('admin.layouts.admin');
    }

    public function users(){
        $users = User::all();
        return json_decode($users);
    }

    public function delete_user($id){
        if(Auth::user()->id != $id){
            $delUser = User::find($id);
            $delUser->delete();

            return json_decode('User is successfully deleted');
        }else{
            return json_decode('Fail');
        }
    }

    public function edit_user($id){

        //TODO user update
        // User::where('id', $id)->update([])
    }

    public function buses(){
        $buses = Bus::all();
        return json_decode($buses);
    }
}
