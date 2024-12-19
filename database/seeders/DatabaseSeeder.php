<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use App\Models\Frontend\Division;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // District and Divisions
        $response = Http::get('https://bdapis.com/api/v1.2/divisions');
        if ($response->successful()) {
            $divisions = $response->json();

            foreach ($divisions['data'] as $division) {
                $division_en = $division['division'];
                $division_bn = $division['divisionbn'];
                $division = Division::Create([
                    'division' =>  $division_en,
                    'division_bn' => $division_bn,
                ]);

                $district_response = Http::get("https://bdapis.com/api/v1.2/division/$division_en");
                if ($district_response->successful()) {
                    $districts = $district_response->json();
                    $insertValue = [];
                    foreach ($districts['data'] as $district) {
                        $district_en = $district['district'];
                        $district_bn = $district['districtbn'];

                        $insertValue[] = [
                            'division_id' => $division->id,
                            'district' => $district_en,
                            'districtbn' => $district_bn,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }

                    // print_r($insertValue);

                    $division->district()->insert($insertValue);
                } else {
                    $this->command->error('Failed to fetch district from the API.');
                }
            }

            $this->command->info('Divisions and Districts stored successfully!');
        } else {
            $this->command->error('Failed to fetch divisions from the API.');
        }


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
        $this->command->info('Categories stored successfully!');
    }
}
