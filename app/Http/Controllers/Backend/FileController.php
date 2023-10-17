<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FileController extends Controller
{
    //

    public function resizeImage(Request $request)
    {
    }

    public function show_files($id)
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $files = File::where('files.status_id', 1)
                ->where('files.id', $id)
                ->get();
            DB::disconnect('files');
            DB::disconnect('users');
            return response()->json($files);
        } else {
            abort(401);
        }
    }
}
