<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    protected function store(Request $request)
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $data = [
                'user_id' => auth()->user()->id,
                'name' => $request->category_name,
                'parent' => $request->category_parent
            ];
            Category::create($data);
            return true;
        } else {
            abort(401);
        }
    }
}
