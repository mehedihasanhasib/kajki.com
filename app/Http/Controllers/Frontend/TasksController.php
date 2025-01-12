<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Frontend\Task;
use App\Models\Frontend\Category;
use App\Models\Frontend\Division;
use App\Models\Frontend\TaskImage;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Http\Requests\Frontend\TaskStoreRequest;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $categories;
    protected $divisions;

    public function __construct()
    {
        $this->categories = Cache::remember('categories', now()->addMinutes(10), function () {
            return Category::select('id', 'name')->get();
        });

        $this->divisions = Cache::remember('divisions', now()->addMinutes(10), function () {
            return Division::with(['district:id,division_id,district'])->select('id', 'division')->get();
        });
    }

    public function index(Request $request)
    {
        $tasks = Task::select(['title', 'address', 'slug', 'details'])
            ->when($request->has('division'), function ($q) use ($request) {
                return $q->where('division_id', $request->query('division'));
            })
            ->when($request->has('district'), function ($q) use ($request) {
                return $q->where('district_id', $request->query('district'));
            })
            ->when($request->has('budget_min'), function ($q) use ($request) {
                return $q->where('budget', '>=', $request->query('budget_min'));
            })
            ->when($request->has('budget_max'), function ($q) use ($request) {
                return $q->where('budget', '<=', $request->query('budget_max'));
            })
            ->when($request->has('categories'), function ($q) use ($request) {
                return $q->whereIn('category_id', $request->query('categories'));
            })
            ->paginate(18);

        return inertia("Frontend/Tasks/Index", [
            'tasks' => $tasks,
            'categories' => $this->categories,
            'divisions' => $this->divisions,
        ]);
    }

    public function profile_index()
    {
        $tasks = Task::where('user_id', Auth::user()->id)->get();
        return inertia('Frontend/Profile/ProfileMyTasks', [
            'tasks' => $tasks,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Frontend/Tasks/Create', [
            'categories' => $this->categories,
            'divisions' => $this->divisions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskStoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $validated_data = $request->except('images');
            $validated_data['slug'] = Str::slug($request->title);

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
    public function show($slug)
    {
        $task = Task::where('slug', $slug)
            ->with([
                'user:id,name,profile_picture',
                'images:id,task_id,image_path'
            ])
            ->select(['id', 'user_id', 'title', 'details', 'budget', 'address', 'contact_number'])
            ->first();

        return inertia("Frontend/Tasks/Show", [
            'task' => $task,
        ]);
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
