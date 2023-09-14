async function form_subject() {
    const form = `
    <label for="subject_name_th">${await __("Subject Name TH")}</label>
    <input id="subject_name_th" name="subject_name_th" type="text" class="form-control rounded-0" required />

    <label for="subject_name_en" class="mt-2">${await __(
        "Subject Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input id="subject_name_en" name="subject_name_en" type="text" class="form-control rounded-0" />
    `;
    return form;
}