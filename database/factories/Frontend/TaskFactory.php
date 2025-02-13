<?php

namespace Database\Factories\Frontend;

use App\Models\Frontend\Division;
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
        $division = Division::with('district')->find(rand(1, 8));
        return [
            'user_id' => $this->faker->numberBetween(1, 10),
            'title' => $title = $this->faker->sentence,
            'slug' => Str::slug($title),
            'category_id' => $this->faker->numberBetween(1, 16),
            'details' => $this->faker->paragraph,
            'division_id' => $division->id,
            'district_id' => $division->district->random()->id,
            'address' => $this->faker->address,
            'budget' => $this->faker->numberBetween(100, 5000),
            'contact_number' => '01' . fake()->randomElement(['3', '4', '5', '6', '7', '8', '9']) . fake()->numerify('#######'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
