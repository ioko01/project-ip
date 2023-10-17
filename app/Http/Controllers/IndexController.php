<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    //
    public function index()
    {
        if (auth()->user()) {
            if (auth()->user()->status_id != 1) {
                Auth::logout();
            }
        }

        $subjects = Subject::get();
        $categories = Category::get();
        $count = [];
        $explode_category = [];
        $thisYear = date("Y") + 543;
        foreach ($subjects as $subject) {
            if ($subject->budget_year == $thisYear) {
                $explode_category = array_merge($explode_category, explode(",", $subject->categories_id));
            }
        }

        $keys = [];
        foreach ($categories as $category) {
            if ($category->parent == 0) {
                $keys = array_merge($keys, array_keys($explode_category, $category->id));
            }
        }

        foreach ($keys as $key) {
            unset($explode_category[$key]);
        }

        $child = [];

        foreach ($explode_category as $explode) {
            foreach ($categories as $category) {
                if ($category->id == $explode) {
                    array_push($child, $category->child);
                }
            }
        }

        $count = array_count_values($child);

        DB::disconnect('categories');
        DB::disconnect('subjects');

        return view('frontend.index', compact('categories', 'count', 'subjects'));
    }
}
