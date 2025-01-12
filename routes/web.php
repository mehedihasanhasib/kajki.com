<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Frontend\Task;
use App\Models\Frontend\Division;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\TasksController;
use App\Http\Controllers\Frontend\ProfileController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\Frontend\TasksProfileController;
use Spatie\LaravelImageOptimizer\Middlewares\OptimizeImages;

/* ======= Home =======*/

Route::get('/', [HomeController::class, 'index'])->name('home');


/* ======= Tasks Show =======*/
Route::get('/tasks', [TasksController::class, 'index'])->name('tasks');
// Route::get('/tasks/{slug}', [TasksController::class, 'show'])->name('task.show');


Route::get('/show', function () {
    return inertia('Frontend/Tasks/Show');
})->name('task.show');

/* ======= Account =======*/
Route::middleware('auth')->group(function () {
    Route::prefix('/profile')->group(function () {
        /* ======= Profile Info =======*/
        Route::get('/', [ProfileController::class, 'edit'])->name('profile');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');

        /* ======= Update Password =======*/
        Route::get('/update-password', [PasswordController::class, 'edit'])->name('profile.update.password');
        Route::put('password', [PasswordController::class, 'update'])->name('password.update');

        /* ======= User Tasks List =======*/
        Route::get('/my-tasks', [TasksController::class, 'profile_index'])->name('profile.mytasks');
    });
    /* ======= Tasks Create =======*/
    Route::get('task/create', [TasksController::class, 'create'])->name('task.create');
    Route::post('task/store', [TasksController::class, 'store'])->name('task.store');
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
