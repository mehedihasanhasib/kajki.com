<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Frontend\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        try {
            $this->command->info("Databse seeding starts. Please wait...");

            DB::beginTransaction();

            // Division & District Seeding
            $this->call(DivisionSeeder::class);

            // Catrgory Seeding
            $this->call(CategorySeeder::class);

            // User Seeding
            User::factory()->count(10)->create();

            // Image Seeding
            // Task::factory()
            //     ->count(500)
            //     ->hasImages(3) // Each task will have 3 images
            //     ->create();

            DB::commit();

            $this->command->info('Database seeding completed successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();

            $this->command->error('Database seeding failed! Try again.');
        }
    }
}
