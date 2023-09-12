<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Status;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $status = [
            ['id' => 1, 'name' => "ใช้งาน"],
            ['id' => 2, 'name' => "ปิดใช้งาน"],
            ['id' => 3, 'name' => "ยกเลิก"],
        ];

        foreach ($status as $key => $s) {
            Status::create($s);
        }
    }
}
