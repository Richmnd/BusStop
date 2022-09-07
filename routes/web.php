<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\BusController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('create', [BusController::class, 'create']);
Route::get('show/{id}', [BusController::class, 'show']);

Route::middleware(['admin'])->group(function(){
    Route::get('admin', [AdminController::class, 'index'])->name('admin_home');
    Route::get('admin/users', [AdminController::class, 'users'])->name('admin_get_users');
});

Auth::routes();

Route::get('home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
