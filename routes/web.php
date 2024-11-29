<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\TasksController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* ======= Home =======*/

Route::get('/', [HomeController::class, 'index'])->name('home');

/* ======= Tasks =======*/
Route::get('/tasks', [TasksController::class, 'index'])->name('tasks');
Route::get('/task/{slug}', [TasksController::class, 'show'])->name('task.show');

/* ======= Profile =======*/
Route::get('/profile', function () {
    return inertia('Frontend/Profile');
})->name('profile');

// ========================================= //
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
