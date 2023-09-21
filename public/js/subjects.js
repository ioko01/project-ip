async function form_subject() {
    let parent = "";
    await get_data("/backend/categories/show_categories", (categories) => {
        categories.forEach((item) => {
            window.navigator.languages[1].toLowerCase() == "th"
                ? (i18n_name = item.name_th)
                : (i18n_name = item.name_en);

            if (item.parent == 0) {
                parent += `<option value="${item.id}">${i18n_name}</option>`;
            }
        });
    });

    const form = `

    <label for="subject_categories">${await __("Categories")}</label>
    <select id="subject_categories" name="subject_categories" class="form-select">${parent}</select>


    <label for="subject_name_th" class="mt-2">${await __(
        "Subject Name TH"
    )}</label>
    <input id="subject_name_th" name="subject_name_th" type="text" class="form-control rounded-0" required />

    <label for="subject_name_en" class="mt-2">${await __(
        "Subject Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input id="subject_name_en" name="subject_name_en" type="text" class="form-control rounded-0" />

    <label for="subject_author" class="mt-2">${await __("Author")}</label>
    <input id="subject_author" name="subject_author" type="text" class="form-control rounded-0" required />

    <label for="subject_license" class="mt-2">${await __("License")}</label>
    <input id="subject_license" name="subject_license" type="text" class="form-control rounded-0" required />

    <label for="subject_serial_number" class="mt-2">${await __(
        "Serial Number"
    )}</label>
    <input id="subject_serial_number" name="subject_serial_number" type="text" class="form-control rounded-0" required />

    <label for="subject_order" class="mt-2">${await __("Order")}</label>
    <input id="subject_order" name="subject_order" type="text" class="form-control rounded-0" required />

    <label for="subject_tell" class="mt-2">${await __("Tell")}</label>
    <input id="subject_tell" name="subject_tell" type="text" class="form-control rounded-0" required />

    <label for="subject_contact" class="mt-2">${await __("Contact")}</label>
    <input id="subject_contact" name="subject_contact" type="text" class="form-control rounded-0" required />

    <label for="subject_file" class="mt-2">${await __("File")}</label>
    <input id="subject_file" name="subject_file" type="file" class="form-control rounded-0" required />
    `;
    return form;
}

function submit_subject(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        insert(modal_id, $("#form_modal_default").serializeArray(), url, true);
        await get_data("/backend/subjects/show_subjects", (subjects) =>
            show_main_subjects(subjects)
        );
    });
}

function show_main_subjects(subjects) {
    console.log(subjects);
}
