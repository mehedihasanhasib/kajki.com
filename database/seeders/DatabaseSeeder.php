<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Division;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
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
    }
}
