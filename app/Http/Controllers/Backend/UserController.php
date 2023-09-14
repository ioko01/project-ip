<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function index()
    {
        return view('backend.users');
    }

    public function show_users()
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $users = User::select(
                'users.id as id',
                'users.name as name',
                'users.username as username',
                'users.role as role',
                'users.email as email',
                'status.name as status',
                'users.created_at as created_at',
                'users.updated_at as updated_at',
            )
                ->leftjoin('status', 'users.status_id', 'status.id')
                ->where('users.status_id', 1)
                ->get();
            DB::disconnect('users');
            return response()->json($users);
        } else {
            abort(401);
        }
    }

    public function show_user_id($id)
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $users = User::select(
                'users.id as id',
                'users.name as name',
                'users.username as username',
                'users.role as role',
                'users.email as email',
                'status.name as status',
                'users.created_at as created_at',
                'users.updated_at as updated_at',
            )
                ->leftjoin('status', 'users.status_id', 'status.id')
                ->where('users.status_id', 1)
                ->where('users.id', $id)
                ->get();
            DB::disconnect('users');
            return response()->json($users);
        } else {
            abort(401);
        }
    }

    protected function validation($request)
    {
        alert(__('Error'), __('Error'), 'error');
        return $request->validate(
            [
                'name' => 'required|string|max:255',
                'username' => 'required|string|min:6|max:18|unique:users',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed'
            ]
        );
    }

    protected function create(Request $request)
    {
        return User::create([
            'name' => $request->name,
            'username' => $request->username,
            'role' => 'MEMBER',
            'email' => $request->email,
            'status_id' => 1,
            'password' => Hash::make($request->password),
        ]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $this->validation($request);
        $user = $this->create($request);

        if ($user) {
            alert(__('Success'), __('Register Successfully'), 'success');
            return true;
        } else {
            abort(401);
        }
    }

    protected function change_status_delete(Request $request)
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $data = [
                'status_id' => 2
            ];
            User::where('users.id', $request->delete_default)->update($data);
            DB::disconnect('users');
            return true;
        } else {
            abort(401);
        }
    }

    protected function change_password(Request $request)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $data = [
                'password' => Hash::make($request->password),
            ];
            User::where('users.id', $request->change_password)->update($data);
            DB::disconnect('users');
            return true;
        } else {
            abort(401);
        }
    }
}
