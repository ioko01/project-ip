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
                'subject_file' => 'required|mimes:pdf,doc,docx|max:10240',
                'subject_file_image' =>  'required|mimes:jpg,jpeg,png|max:10240',
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
                'categories_id' => join(",", $request->subject_categories),
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

                $upload_img = $request->file('subject_file_image');
                $extension_img = $upload_img->extension();
                $name_img = $upload_img->getClientOriginalName();
                $path_img = 'public/assets/' . $id;
                $full_path_img = $path_img . "/" . $name_img;

                $file = [
                    'user_id' => auth()->user()->id,
                    'subject_id' => $id,
                    'file' => $full_path,
                    'file_extension' => $extension,
                    'image' => $full_path_img,
                    'image_extension' => $extension_img,
                    'status_id' => 1
                ];

                File::create($file);

                $upload->storeAs($path, $name);
                $upload_img->storeAs($path_img, $name_img);

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
            $subjects = Subject::select(
                'subjects.categories_id as categories_id',
                'subjects.name_th as name_th',
                'subjects.name_en as name_en',
                'subjects.author as author',
                'subjects.license as license',
                'subjects.serial_number as serial_number',
                'subjects.order as order',
                'subjects.tell as tell',
                'subjects.contact as contact',
                'users.name as name',
            )
                ->leftjoin('users', 'users.id', 'subjects.user_id')
                ->where('subjects.status_id', 1)
                ->get();
            DB::disconnect('subjects');
            DB::disconnect('users');
            return response()->json($subjects);
        } else {
            abort(401);
        }
    }
}
