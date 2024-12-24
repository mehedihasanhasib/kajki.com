<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Models\Frontend\Task;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TasksProfileController extends Controller
{
    public function index(){
        $tasks = Task::where('user_id', Auth::user()->id)->get();
        return inertia('Frontend/Profile/ProfileMyTasks',[
            'tasks' => $tasks,
        ]);
    }
}
