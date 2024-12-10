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
                Division::Create([
                    'division' =>  $division['division'],
                    'division_bn' =>  $division['divisionbn'],
                ]);

                
            }


            $this->command->info('Division stored successfully!');
        } else {
            $this->command->error('Failed to fetch divisions from the API.');
        }
    }
}
