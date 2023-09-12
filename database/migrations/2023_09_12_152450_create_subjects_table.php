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
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('categories_id')->nullable()->comment('ไอดีหมวดหมู่');
            $table->text('name_th')->comment('ชื่อเรื่อง(ไทย)');
            $table->text('name_en')->nullable()->comment('ชื่อเรื่อง(อังกฤษ)');
            $table->text('author')->nullable()->comment('ผู้แต่ง/เจ้าของเรื่อง/ผู้ประดิษฐ์');
            $table->text('license')->nullable()->comment('การอนุญาต/อนุมัติ');
            $table->string('serial_number')->nullable()->comment('เลขที่คำขอ');
            $table->text('order')->nullable()->comment('การสั่งซื้อ');
            $table->string('tell')->nullable()->comment('โทร');
            $table->text('contact')->nullable()->comment('การติดต่อ');
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
        Schema::dropIfExists('subjects');
    }
};
