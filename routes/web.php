<?php

use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\IntellectualController;
use App\Http\Controllers\Backend\SubjectController;
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
    if (auth()->user()) {
        if (auth()->user()->status_id != 1) {
            Auth::logout();
        }
    }

    return view('frontend.welcome');
});

Auth::routes(['verify' => true]);

Route::middleware(['auth', 'verified', 'is_admin'])->group(function () {
    Route::prefix('backend')->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('backend.dashboard.index');
        Route::get('users', [UserController::class, 'index'])->name('backend.users.index');
        Route::get('users/show_users', [UserController::class, 'show_users']);
        Route::get('user/{id}', [UserController::class, 'show_user_id']);
        Route::put('user/delete', [UserController::class, 'change_status_delete']);
        Route::put('user/change/password', [UserController::class, 'change_password']);
        Route::post('user/register', [UserController::class, 'register'])->name('backend.user.register');
        Route::get('categories', [CategoryController::class, 'index'])->name('backend.categories.index');
        Route::get('categories/show_categories', [CategoryController::class, 'show_categories']);
        Route::post('category/store', [CategoryController::class, 'store'])->name('backend.category.store');
        Route::put('category/delete', [CategoryController::class, 'change_status_delete']);
        Route::put('category/child/edit', [CategoryController::class, 'edit_child_category']);
        Route::get('subjects', [SubjectController::class, 'index'])->name('backend.subjects.index');
    });
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
