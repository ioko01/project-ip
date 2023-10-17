<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $table = 'subjects';

    protected $fillable = [
        'user_id',
        'categories_id',
        'name_th',
        'name_en',
        'author',
        'license',
        'serial_number',
        'order',
        'tell',
        'budget_year',
        'contact',
        'status_id',
    ];
}
