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
        Schema::create('file', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->tinyInteger('subject_id')->comment('ไอดีเรื่อง');
            $table->text('file')->comment('ไฟล์');
            $table->text('file_extension')->nullable()->comment('นามสกุลไฟล์');
            $table->text('image')->nullable()->comment('รูป');
            $table->text('image_extension')->nullable()->comment('นามสกุลรูป');
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
        Schema::dropIfExists('file');
    }
};
