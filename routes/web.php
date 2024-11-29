<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\TasksController;
use App\Http\Controllers\Frontend\ProfileController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/* ======= Home =======*/

Route::get('/', [HomeController::class, 'index'])->name('home');

/* ======= Tasks =======*/
Route::get('/tasks', [TasksController::class, 'index'])->name('tasks');
Route::get('/task/{slug}', [TasksController::class, 'show'])->name('task.show');

/* ======= Profile =======*/
Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');

// ========================================= //
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/email/verify', function () {
    return inertia('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
