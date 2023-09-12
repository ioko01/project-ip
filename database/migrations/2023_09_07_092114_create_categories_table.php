<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->text('name_th')->comment('ชื่อหมวดหมู่(ไทย)');
            $table->text('name_en')->nullable()->comment('ชื่อหมวดหมู่(อังกฤษ)');
            $table->integer('parent')->comment('หมวดหมู่ 0 คือหมวดหมู่หลัก 1 คือ หมวดหมู่รอง');
            $table->integer('child')->nullable()->comment('ใส่ไอดีของหมวดหมู่หลัก');
            $table->string('icon')->nullable()->comment('Icon Fontawesome');
            $table->tinyInteger('status_id')->comment('ไอดีสถานะการใช้งาน');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
