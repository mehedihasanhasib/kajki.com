<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TasksProfileController extends Controller
{
    public function index(){
        return inertia('Frontend/Profile/ProfileMyTasks');
    }
}
