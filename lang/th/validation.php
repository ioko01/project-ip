<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ':attribute ต้องได้รับการยอมรับ',
    'accepted_if' => 'ต้องยอมรับ :attribute เมื่อ :other คือ :value.',
    'active_url' => ':attribute ไม่ใช่ URL ที่ถูกต้อง',
    'after' => 'The :attribute must be a date after :date.',
    'after_or_equal' => 'The :attribute must be a date after or equal to :date.',
    'alpha' => 'The :attribute must only contain letters.',
    'alpha_dash' => 'The :attribute must only contain letters, numbers, dashes and underscores.',
    'alpha_num' => 'The :attribute must only contain letters and numbers.',
    'array' => 'The :attribute must be an array.',
    'ascii' => 'The :attribute must only contain single-byte alphanumeric characters and symbols.',
    'before' => 'The :attribute must be a date before :date.',
    'before_or_equal' => 'The :attribute must be a date before or equal to :date.',
    'between' => [
        'array' => 'The :attribute must have between :min and :max items.',
        'file' => 'The :attribute must be between :min and :max kilobytes.',
        'numeric' => 'The :attribute must be between :min and :max.',
        'string' => ':attribute ต้องอยู่ระหว่าง :min และ :max ตัวอักษร',
    ],
    'boolean' => 'The :attribute field must be true or false.',
    'confirmed' => 'การยืนยัน :attribute ไม่ตรงกัน',
    'current_password' => 'The password is incorrect.',
    'date' => 'The :attribute is not a valid date.',
    'date_equals' => 'The :attribute must be a date equal to :date.',
    'date_format' => 'The :attribute does not match the format :format.',
    'decimal' => 'The :attribute must have :decimal decimal places.',
    'declined' => 'The :attribute must be declined.',
    'declined_if' => 'The :attribute must be declined when :other is :value.',
    'different' => 'The :attribute and :other must be different.',
    'digits' => 'The :attribute must be :digits digits.',
    'digits_between' => 'The :attribute must be between :min and :max digits.',
    'dimensions' => 'The :attribute has invalid image dimensions.',
    'distinct' => 'The :attribute field has a duplicate value.',
    'doesnt_end_with' => 'The :attribute may not end with one of the following: :values.',
    'doesnt_start_with' => 'The :attribute may not start with one of the following: :values.',
    'email' => ':attribute ต้องเป็นที่อยู่อีเมลที่ถูกต้อง',
    'ends_with' => 'The :attribute must end with one of the following: :values.',
    'enum' => 'The selected :attribute is invalid.',
    'exists' => 'The selected :attribute is invalid.',
    'file' => 'The :attribute must be a file.',
    'filled' => 'The :attribute field must have a value.',
    'gt' => [
        'array' => 'The :attribute must have more than :value items.',
        'file' => 'The :attribute must be greater than :value kilobytes.',
        'numeric' => 'The :attribute must be greater than :value.',
        'string' => 'The :attribute must be greater than :value characters.',
    ],
    'gte' => [
        'array' => 'The :attribute must have :value items or more.',
        'file' => 'The :attribute must be greater than or equal to :value kilobytes.',
        'numeric' => 'The :attribute must be greater than or equal to :value.',
        'string' => 'The :attribute must be greater than or equal to :value characters.',
    ],
    'image' => 'The :attribute must be an image.',
    'in' => 'The selected :attribute is invalid.',
    'in_array' => 'The :attribute field does not exist in :other.',
    'integer' => 'The :attribute must be an integer.',
    'ip' => 'The :attribute must be a valid IP address.',
    'ipv4' => 'The :attribute must be a valid IPv4 address.',
    'ipv6' => 'The :attribute must be a valid IPv6 address.',
    'json' => 'The :attribute must be a valid JSON string.',
    'lowercase' => 'The :attribute must be lowercase.',
    'lt' => [
        'array' => 'The :attribute must have less than :value items.',
        'file' => 'The :attribute must be less than :value kilobytes.',
        'numeric' => 'The :attribute must be less than :value.',
        'string' => 'The :attribute must be less than :value characters.',
    ],
    'lte' => [
        'array' => 'The :attribute must not have more than :value items.',
        'file' => 'The :attribute must be less than or equal to :value kilobytes.',
        'numeric' => 'The :attribute must be less than or equal to :value.',
        'string' => 'The :attribute must be less than or equal to :value characters.',
    ],
    'mac_address' => 'The :attribute must be a valid MAC address.',
    'max' => [
        'array' => 'The :attribute must not have more than :max items.',
        'file' => 'The :attribute must not be greater than :max kilobytes.',
        'numeric' => 'The :attribute must not be greater than :max.',
        'string' => 'The :attribute must not be greater than :max characters.',
    ],
    'max_digits' => 'The :attribute must not have more than :max digits.',
    'mimes' => 'The :attribute must be a file of type: :values.',
    'mimetypes' => 'The :attribute must be a file of type: :values.',
    'min' => [
        'array' => 'The :attribute must have at least :min items.',
        'file' => 'The :attribute must be at least :min kilobytes.',
        'numeric' => 'The :attribute must be at least :min.',
        'string' => ':attribute ต้องมีอย่างน้อย :min ตัวอักษร',
    ],
    'min_digits' => 'The :attribute must have at least :min digits.',
    'missing' => 'The :attribute field must be missing.',
    'missing_if' => 'The :attribute field must be missing when :other is :value.',
    'missing_unless' => 'The :attribute field must be missing unless :other is :value.',
    'missing_with' => 'The :attribute field must be missing when :values is present.',
    'missing_with_all' => 'The :attribute field must be missing when :values are present.',
    'multiple_of' => 'The :attribute must be a multiple of :value.',
    'not_in' => 'The selected :attribute is invalid.',
    'not_regex' => 'The :attribute format is invalid.',
    'numeric' => 'The :attribute must be a number.',
    'password' => [
        'letters' => 'The :attribute must contain at least one letter.',
        'mixed' => 'The :attribute must contain at least one uppercase and one lowercase letter.',
        'numbers' => 'The :attribute must contain at least one number.',
        'symbols' => 'The :attribute must contain at least one symbol.',
        'uncompromised' => 'The given :attribute has appeared in a data leak. Please choose a different :attribute.',
    ],
    'present' => 'The :attribute field must be present.',
    'prohibited' => 'The :attribute field is prohibited.',
    'prohibited_if' => 'The :attribute field is prohibited when :other is :value.',
    'prohibited_unless' => 'The :attribute field is prohibited unless :other is in :values.',
    'prohibits' => 'The :attribute field prohibits :other from being present.',
    'regex' => 'The :attribute format is invalid.',
    'required' => 'The :attribute field is required.',
    'required_array_keys' => 'The :attribute field must contain entries for: :values.',
    'required_if' => 'The :attribute field is required when :other is :value.',
    'required_if_accepted' => 'The :attribute field is required when :other is accepted.',
    'required_unless' => 'The :attribute field is required unless :other is in :values.',
    'required_with' => 'The :attribute field is required when :values is present.',
    'required_with_all' => 'The :attribute field is required when :values are present.',
    'required_without' => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same' => 'The :attribute and :other must match.',
    'size' => [
        'array' => ':attribute ต้องมีรายการ :size',
        'file' => ':attribute ต้องเป็น :size กิโลไบต์',
        'numeric' => ':attribute ต้องเป็น :size.',
        'string' => ':attribute ต้องมี :size ตัวอักษร',
    ],
    'starts_with' => 'The :attribute must start with one of the following: :values.',
    'string' => 'The :attribute must be a string.',
    'timezone' => 'The :attribute must be a valid timezone.',
    'unique' => ':attribute ได้ถูกนำไปใช้แล้ว',
    'uploaded' => 'The :attribute failed to upload.',
    'uppercase' => 'The :attribute must be uppercase.',
    'url' => 'The :attribute must be a valid URL.',
    'ulid' => 'The :attribute must be a valid ULID.',
    'uuid' => 'The :attribute must be a valid UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        "Username" => "ชื่อผู้ใช้งาน",
        "Password" => "รหัสผ่าน",
        "Confirm Password" => "ยืนยันรหัสผ่าน",
        "Remember Me" => "จดจำฉัน",
        "Login" => "เข้าสู่ระบบ",
        "Forgot Your Password?" => "ลืมรหัสผ่าน?",
        "Register" => "สมัครสมาชิก",
        "Name" => "ชื่อ",
        "Name TH" => "ชื่อ (ภาษาไทย)",
        "Name EN" => "ชื่อ (ภาษาอังกฤษ)",
        "Name EN " => "ชื่อ (ภาษาอังกฤษ)",
        "Full Name" => "ชื่อ - สกุล",
        "Email Address" => "อีเมล",
        "Role" => "ตำแหน่ง",
        "Status" => "สถานะ",
        "Created at" => "สร้างเมื่อ",
        "Updated at" => "อัพเดตเมื่อ",
        "Success" => "สำเร็จ",
        "Register Successfully" => "สมัครสมาชิกสำเร็จ",
        "Home" => "หน้าแรก",
        "Intellectual Property" => "กรมทรัพย์สินทางปัญญา",
        "Logout" => "ออกจากระบบ",
        "Works that are produced and ready for sale" => "ผลงานที่มีการผลิตพร้อมจำหน่าย",
        "Patent / Petty Patent" => "สิทธิบัตร / อนุสิทธิบัตร",
        "Dashboard" => "แผงควบคุม",
        "Website" => "เว็บไซต์",
        "Users" => "ผู้ใช้งาน",
        "Intellectual Property Categories" => "หมวดหมู่ของกรมทรัพย์สินทางปัญญา",
        "Add Type" => "เพิ่มประเภท",
        "Add Category" => "เพิ่มหมวดหมู่",
        "Add Parent Category" => "เพิ่มหมวดหมู่หลัก",
        "Add Child Category" => "เพิ่มหมวดหมู่ย่อย",
        "Parent Categories" => "หมวดหมู่หลัก",
        "Parent Category" => "หมวดหมู่หลัก",
        "Categories" => "หมวดหมู่",
        "Child Categories" => "หมวดหมู่ย่อย",
        "Child Category" => "หมวดหมู่ย่อย",
        "Close" => "ปิด",
        "Save changes" => "บันทึก",
        "Must be an admin" => "ต้องเป็นแอดมิน",
        "Error" => "ผิดพลาด",
        "Category" => "หมวดหมู่",
        "Required" => ":attribute ต้องระบุข้อมูล",
        "required" => ":attribute ต้องระบุข้อมูล",
        "Save" => "บันทึก",
        "Close" => "ปิด",
        "Cancel" => "ยกเลิก",
        "Subject" => "เรื่อง",
        "No internet connection Please check your network." => "ไม่มีการเชื่อมต่ออินเตอร์เน็ต กรุณาตรวจสอบเครือข่ายของท่าน",
        "Something went wrong. Please try again later." => "เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้งในภายหลัง",
        "User" => "ผู้ใช้งาน",
        "Users" => "ผู้ใช้งาน",
        "Add User" => "เพิ่มผู้ใช้งาน",
        "Delete User" => "ลบผู้ใช้งาน",
        "category_name_th" => "หมวดหมู่ (ภาษาไทย)",
        "category_name_en" => "หมวดหมู่ (ภาษาอังกฤษ)",
        "name" => "ชื่อ",
        "username" => "ชื่อผู้ใช้งาน",
        "email" => "อีเมล",
        "password" => "รหัสผ่าน",
        'reset' => 'รีเซ็ตรหัสผ่านแล้ว!',
        'sent' => 'ส่งลิงก์รีเซ็ตรหัสผ่านของคุณไปยังอีเมลแล้ว!',
        'throttled' => 'กรุณาลองใหม่อีกครั้งในภายหลัง',
        'token' => 'โทเค็นการรีเซ็ตรหัสผ่านนี้ไม่ถูกต้อง',
        'user' => "ไม่พบผู้ใช้ที่มีที่อยู่อีเมลนั้น",
    ],

];
