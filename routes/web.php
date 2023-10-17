<?php

use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\FileController;
use App\Http\Controllers\Backend\IntellectualController;
use App\Http\Controllers\Backend\SubjectController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\IndexController;
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

Route::get('/', [IndexController::class, 'index'])->name('index');

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
        Route::put('category/parent/edit', [CategoryController::class, 'edit_parent_category']);
        Route::get('subjects', [SubjectController::class, 'index'])->name('backend.subjects.index');
        Route::post('subject/store', [SubjectController::class, 'store'])->name('backend.subject.store');
        Route::get('subjects/show_subjects', [SubjectController::class, 'show_subjects']);
        Route::put('subject/delete', [SubjectController::class, 'change_status_delete']);
        Route::put('subject/edit', [SubjectController::class, 'edit_subject']);
        Route::get('files/show_files/{id}', [FileController::class, 'show_files']);
    });
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
