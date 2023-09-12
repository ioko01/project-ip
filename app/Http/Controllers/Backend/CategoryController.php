<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    protected function validation(Request $request)
    {
        alert(__('Error'), __('Error'), 'error');
        // alert('ผิดพลาด', 'ไม่สามารถอัพโหลดได้กรุณาตรวจสอบความถูกต้องอีกครั้ง', 'error')->showConfirmButton('ปิด', '#3085d6');
        return $request->validate(
            [
                'category_name_th' => 'required',
            ]
        );
    }
    //

    public function index()
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            Category::get();
            DB::disconnect('categories');
            DB::disconnect('users');
            return view('backend.categories');
        } else {
            abort(401);
        }
    }

    public function show_categories()
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $categories = Category::get();
            DB::disconnect('categories');
            DB::disconnect('users');
            return response()->json($categories);
        } else {
            abort(401);
        }
    }

    protected function store(Request $request)
    {
        $this->validation($request);
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $parent = 0;
            if ($request->category_parent) {
                $parent = 1;
            }

            $data = [
                'user_id' => auth()->user()->id,
                'status_id' => 1,
                'name_th' => $request->category_name_th,
                'name_en' => $request->category_name_en,
                'child' => $request->category_parent,
                'parent' => $parent
            ];
            Category::create($data);
            DB::disconnect('categories');
            DB::disconnect('users');
            return true;
        } else {
            abort(401);
        }
    }
}
