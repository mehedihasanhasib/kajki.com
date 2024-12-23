<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Frontend\Category;
use App\Models\Frontend\Division;
use App\Models\Frontend\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Frontend/Tasks/Index");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Cache::remember('categories', now()->addMinutes(10), function () {
            return Category::select('id', 'name')->get();
        });
        
        $divisions = Cache::remember('divisions', now()->addMinutes(10), function () {
            return Division::with(['district:id,division_id,district'])->select('id', 'division')->get();
        });

        return inertia('Frontend/Tasks/Create', [
            'categories' => $categories,
            'divisions' => $divisions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['required', 'exists:categories,id'],
            'details' => ['required', 'string', 'max:500'],
            'division_id' => ['required', 'exists:divisions,id'],
            'district_id' => ['required', 'exists:districts,id'],
            'address' => ['required', 'string', 'max:255'],
            'budget' => ['required', 'numeric', 'min:0'],
            'contact_number' => ['required', 'max:255'],
        ],[
            'category_id.required' => 'Select a category',
            'category_id.exists' => 'Category not found',
            'division_id.required' => 'Select a division',
            'division_id.exists' => 'Division not found',
            'district_id.required' => 'Select a district',
            'district_id.exists' => 'District not found'
        ]);

        $validated_data = $request->all();
        $request->user()->task()->create($validated_data);

        session()->flash('message', 'Task created successfully!');
        return redirect()->route('profile.mytasks');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia("Frontend/Tasks/Show");
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
