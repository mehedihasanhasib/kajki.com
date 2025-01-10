<?php

namespace Database\Factories\Frontend;

use Illuminate\Support\Str;
use App\Models\Frontend\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    protected $model = Task::class;
    
    public function definition(): array
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 10),
            'title' => $title = $this->faker->sentence,
            'slug' => Str::slug($title),
            'category_id' => $this->faker->numberBetween(1, 5),
            'details' => $this->faker->paragraph,
            'division_id' => $this->faker->numberBetween(1, 8),
            'district_id' => $this->faker->numberBetween(1, 64),
            'address' => $this->faker->address,
            'budget' => $this->faker->numberBetween(100, 5000),
            'contact_number' => $this->faker->phoneNumber,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
