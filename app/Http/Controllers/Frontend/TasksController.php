<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Frontend\Task;
use App\Models\Frontend\TaskImage;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Frontend\TaskRequest;
use App\Traits\TasksControllerHelperTrait;
use Illuminate\Support\Facades\Storage;

class TasksController extends Controller
{
    use TasksControllerHelperTrait;

    public $userId;

    public function __construct()
    {
        $this->userId = Auth::user()->id ?? null;
    }
    /**
     * Display a listing of the resource.
     */
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
                return $q->whereIn('category_id', explode("_", $request->query('categories')));
            })
            ->when($request->input('sort') === "default" || $request->input('sort') === null, function ($q) {
                return $q->orderBy('id', 'desc');
            })
            ->when($request->input('sort') === "budget_asc", function ($q) {
                return $q->orderBy('budget', 'asc');
            })
            ->when($request->input('sort') === "budget_desc", function ($q) {
                return $q->orderBy('budget', 'desc');
            })
            ->paginate(24);

        return inertia("Frontend/Tasks/Index", [
            'tasks' => $tasks,
            'categories' => $this->categories(),
            'divisions' => $this->divisions(),
        ]);
    }

    /**
     * Show listed tasks to authenticated users.
     */
    public function profile_index()
    {
        return inertia('Frontend/Profile/ProfileMyTasks', [
            'tasks' => Task::where('user_id', Auth::user()->id)->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Frontend/Tasks/Create', [
            'categories' => $this->categories(),
            'divisions' => $this->divisions(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        // dd($request->all());
        try {
            DB::beginTransaction();
            $validated_data = collect($request->validated())->except('images')->toArray();
            $validated_data['slug'] = Str::slug($request->title) . '-' . Str::random(6);

            $task = $request->user()->task()->create($validated_data);
            $images = $request->images;
            $paths = $this->image_upload($images, $task->id);

            TaskImage::insert($paths);

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
        try {
            $task = Task::with(['images:id,task_id,image_path'])
                ->where('id', $id)
                ->where('user_id', $this->userId)
                ->firstOrFail();

            return inertia("Frontend/Profile/ProfileMyTasksEdit", [
                'task' => $task,
                'categories' => $this->categories(),
                'divisions' => $this->divisions(),
            ]);
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went worng! Try Again');
            return redirect()->back();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, string $id)
    {
        try {
            DB::beginTransaction();

            $validated_data = collect($request->validated())->except('images')->toArray();
            $images_to_delete = collect($request->images_to_delete)->filter(fn($value) => !is_null($value))->toArray();

            $task = Task::with('images')
                ->where('id', $id)
                ->where('user_id', $this->userId)
                ->firstOrFail();
            $task->update($validated_data);

            if (!empty($images_to_delete)) {
                $old_images = $task->images;
                foreach ($images_to_delete as $key => $id) {
                    $old_images->each(function ($image) use ($id, $task) {
                        if ($image->id == $id) {
                            if (Storage::disk('public')->exists("task_images/" . $image->image_path)) {
                                Storage::disk('public')->delete("task_images/" . $image->image_path);
                            }
                        }
                    });
                }
                $task->images()->whereIn('id', $images_to_delete)->delete();
            }

            $images = $request->images;
            $paths = $this->image_upload($images, $task->id);
            TaskImage::insert($paths);

            session()->flash('message', 'Task Updated successfully!');
            DB::commit();
            return redirect()->route('profile.mytasks');
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went worng! Try Again');
            return redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $task = Task::with('images')
                ->where('id', $id)
                ->where('user_id', $this->userId)
                ->firstOrFail();

            $images = $task->images;

            $images->each(function ($image) {
                if (Storage::disk('public')->exists("task_images/" . $image->image_path)) {
                    Storage::disk('public')->delete("task_images/" . $image->image_path);
                }
            });

            $task->delete();

            session()->flash('message', 'Task Deleted successfully!');
            DB::commit();
            return redirect()->route('profile.mytasks');
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went worng! Try Again');
            return redirect()->back();
        }
    }
}
