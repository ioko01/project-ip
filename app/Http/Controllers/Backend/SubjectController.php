<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    //
    public function index()
    {
        return view('backend.subjects');
    }

    protected function validation(Request $request)
    {
        alert(__('Error'), __('Error'), 'error');
        // alert('ผิดพลาด', 'ไม่สามารถอัพโหลดได้กรุณาตรวจสอบความถูกต้องอีกครั้ง', 'error')->showConfirmButton('ปิด', '#3085d6');
        return $request->validate(
            [
                'subject_categories' => 'required',
                'subject_name_th' => 'required',
                'subject_author' => 'required',
                'subject_license' => 'required',
                'subject_serial_number' => 'required',
                'subject_order' => 'required',
                'subject_tell' => 'required',
                'subject_contact' => 'required',
                'subject_file' => 'required|mimes:pdf,doc,docx|max:10240'
            ]
        );
    }

    protected function store(Request $request)
    {
        $this->validation($request);
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {

            $data = [
                'user_id' => auth()->user()->id,
                'status_id' => 1,
                'categories_id' => $request->subject_categories,
                'name_th' => $request->subject_name_th,
                'name_en' => $request->subject_name_en,
                'author' => $request->subject_author,
                'license' => $request->subject_license,
                'serial_number' => $request->subject_serial_number,
                'order' => $request->subject_order,
                'tell' => $request->subject_tell,
                'contact' => $request->subject_contact,
            ];
            $id = Subject::create($data)->id;

            if ($request->hasfile('subject_file')) {
                $upload = $request->file('subject_file');
                $extension = $upload->extension();
                $name = $upload->getClientOriginalName();
                $path = 'public/assets/' . $id;
                $full_path = $path . "/" . $name;

                $file = [
                    'user_id' => auth()->user()->id,
                    'subject_id' => $id,
                    'file' => $full_path,
                    'file_extension' => $extension,
                    'image' => $full_path,
                    'image_extension' => $extension,
                    'status_id' => 1
                ];

                File::create($file);

                $upload->storeAs($path, $name);

                return true;
            } else {
                abort(401);
            }
            DB::disconnect('subjects');
            DB::disconnect('users');
        } else {
            abort(401);
        }
    }

    public function show_subjects()
    {
        $user = User::find(auth()->user()->id);
        $roles = ["ADMIN", "MANAGER"];
        if (in_array($user->role, $roles)) {
            $subjects = Subject::where('subjects.status_id', 1)->get();
            DB::disconnect('subjects');
            DB::disconnect('users');
            return response()->json($subjects);
        } else {
            abort(401);
        }
    }
}
