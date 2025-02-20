<?php

namespace App\Traits;

use App\Models\Frontend\Category;
use App\Models\Frontend\Division;
use Illuminate\Support\Facades\Cache;

trait TasksControllerHelperTrait
{
    private function categories()
    {
        return Cache::remember('categories', now()->addMinutes(10), function () {
            return Category::select('id', 'name')->get();
        });
    }

    private function divisions()
    {
        return Cache::remember('divisions', now()->addMinutes(10), function () {
            return Division::with(['district:id,division_id,district'])->select('id', 'division')->get();
        });
    }

    private function image_upload($images, $task_id)
    {
        $path = [];
        foreach ($images as $image) {
            $path[] = [
                'task_id' => $task_id,
                'image_path' => basename($image->store('task_images', 'public')),
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        return $path;
    }
}
