<?php

namespace Database\Factories\Frontend;

use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaskImage>
 */
class TaskImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $files = File::files(storage_path('app/public/task_images'));
        $randomFile = $files[array_rand($files, 1)];
        return [
            'task_id' => null, // Will be assigned dynamically
            'image_path' => $randomFile->getFilename(),
        ];
    }
}
