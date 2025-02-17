<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Models\Frontend\Task;
use App\Models\Frontend\Category;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $popular_categories = Category::withCount('tasks')
            ->orderByDesc('tasks_count')
            ->limit(4)
            ->get(['id', 'name', 'tasks_count']);
        return inertia('Frontend/Home/Index', [
            'recent_tasks' => Task::with(['user:id,name,profile_picture', 'images:task_id,image_path'])->orderBy('id', 'desc')->limit(6)->get(),
            'popular_categories' => $popular_categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
