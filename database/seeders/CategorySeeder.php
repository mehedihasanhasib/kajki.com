<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Catrgory Seeding
        $categories = [
            ['name' => 'Plumbing', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Carpentry', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Electrical Work', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Painting and Decorating', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cleaning and Maintenance', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Landscaping and Gardening', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Masonry', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'HVAC', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'General Handyman Services', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Roofing', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Appliance Repair', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Home Security and Automation', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Flooring', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pest Control', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Waste Management', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Others', 'created_at' => now(), 'updated_at' => now()],
        ];
        DB::table('categories')->insert($categories);
    }
}
