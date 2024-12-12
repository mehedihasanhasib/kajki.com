<?php

use App\Http\Controllers\Auth\PasswordController;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\TasksController;
use App\Http\Controllers\Frontend\ProfileController;
use App\Http\Controllers\Frontend\TasksProfileController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/* ======= Home =======*/
Route::get('/', [HomeController::class, 'index'])->name('home');



/* ======= Tasks Show =======*/
Route::get('/tasks', [TasksController::class, 'index'])->name('tasks');
Route::get('/task/{slug}', [TasksController::class, 'show'])->name('task.show');



/* ======= Account =======*/
Route::middleware('auth')->group(function () {
    Route::prefix('/profile')->group(function(){
        /* ======= Profile Info =======*/
        Route::get('/', [ProfileController::class, 'edit'])->name('profile');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');

        /* ======= Update Password =======*/
        Route::get('/update-password', [PasswordController::class, 'edit'])->name('profile.update.password');

        /* ======= Profile Tasks =======*/
        Route::get('/my-tasks', [TasksProfileController::class, 'index'])->name('profile.mytasks');

    });

    /* ======= Tasks Create =======*/
    Route::get('create-task', [TasksController::class, 'create'])->name('task.create');
});



// ===== Email Verification ===== //
// Route::get('/email/verify', function () {
//     return inertia('Auth/VerifyEmail');
// })->middleware('auth')->name('verification.notice');
// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();

//     return redirect('/home');
// })->middleware(['auth', 'signed'])->name('verification.verify');
// Route::post('/email/verification-notification', function (Request $request) {
//     $request->user()->sendEmailVerificationNotification();

//     return back()->with('message', 'Verification link sent!');
// })->middleware(['auth', 'throttle:6,1'])->name('verification.send');
// ========================================= //

require __DIR__ . '/auth.php';
