<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Frontend\Category;
use App\Models\Frontend\Division;
use App\Models\Frontend\Task;
use App\Models\Frontend\TaskImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

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
        // dd($request->all());
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['required', 'exists:categories,id'],
            'details' => ['required', 'string', 'max:1000'],
            'division_id' => ['required', 'exists:divisions,id'],
            'district_id' => ['required', 'exists:districts,id'],
            'address' => ['required', 'string', 'max:255'],
            'budget' => ['required', 'numeric', 'min:0'],
            'contact_number' => ['required', 'max:255'],
            'images' => ['required', 'array'],
            'images.*' => ['image', 'max:2048', 'mimes:jpg,jpeg,png'],
        ], [
            'category_id.required' => 'Select a category',
            'category_id.exists' => 'Category not found',
            'division_id.required' => 'Select a division',
            'division_id.exists' => 'Division not found',
            'district_id.required' => 'Select a district',
            'district_id.exists' => 'District not found',
            'images.*.max' => 'Image size should not exceed 2MB',
            'images.*.mimes' => 'Only .jpg, .jpeg, or .png files are allowed',
        ]);

        try {
            DB::beginTransaction();
            $validated_data = $request->except('images');
            $task = $request->user()->task()->create($validated_data);
            $images = $request->images;
            $path = [];
            foreach ($images as $image) {
                $path[] = [
                    'task_id' => $task->id,
                    'image_path' => $image->store('task_images', 'public'),
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }
            TaskImage::insert($path);
            session()->flash('message', 'Task created successfully!');
            DB::commit();
            return redirect()->route('profile.mytasks');
        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Failed to create task: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
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
