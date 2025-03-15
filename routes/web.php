<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AppController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified', 'admin'])->group(function () {

    Route::prefix('/dashboard')->group(function () {
        Route::get('/', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');

        Route::resource('categories', CategoryController::class);
        Route::resource('events', EventController::class);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
