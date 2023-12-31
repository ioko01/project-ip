<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'user_id',
        'status_id',
        'name_th',
        'name_en',
        'parent',
        'child',
        'icon'
    ];
}
