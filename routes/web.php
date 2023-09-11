<?php

use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\IntellectualController;
use App\Http\Controllers\Backend\UserController;
use Illuminate\Support\Facades\Auth;
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
    return view('frontend.welcome');
});

Auth::routes(['verify' => true]);

Route::middleware(['auth', 'verified', 'is_admin'])->group(function () {
    Route::prefix('backend')->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('backend.dashboard.index');
        Route::get('intellectuals', [IntellectualController::class, 'index'])->name('backend.intellectuals.index');
        Route::get('users', [UserController::class, 'index'])->name('backend.users.index');
        Route::post('category/store', [CategoryController::class, 'store'])->name('backend.category.store');
    });
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
