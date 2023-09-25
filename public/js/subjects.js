$(document).ready(async function () {
    await get_data("/backend/subjects/show_subjects", (subjects) =>
        show_main_subjects(subjects)
    );
});

async function form_subject() {
    let all_category = "";
    let parent;
    await get_data("/backend/categories/show_categories", (categories) => {
        categories.forEach((item) => {
            window.navigator.languages[1].toLowerCase() == "th"
                ? (i18n_name = item.name_th)
                : (i18n_name = item.name_en);

            if (item.parent == 0) {
                parent = item.id;
                all_category += `
                <input name="subject_categories[]" class="form-check-input" type="checkbox" value="${item.id}" id="${item.id}">
                <label class="form-check-label" for="${item.id}">
                ${i18n_name}
                </label>`;
            }

            const child = categories.filter((c) => item.id == c.child);
            child.forEach((res) => {
                window.navigator.languages[1].toLowerCase() == "th"
                    ? (i18n_name_child = res.name_th)
                    : (i18n_name_child = res.name_en);
                if (res.parent == 1) {
                    all_category += `
                    <div class="ms-5">
                        <input name="subject_categories[]" class="form-check-input" type="checkbox" value="${res.id}" id="${res.id}">
                        <label class="form-check-label" for="${res.id}">
                        ${i18n_name_child}
                        </label>
                    </div>
                    `;
                }
            });
        });
    });

    const form = `

    <label for="subject_categories">${await __("Categories")}</label>
    <div class="border p-3">
        <div class="form-check">
            ${all_category}
        </div>
    </div>


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
    <input id="subject_license" name="subject_license" type="text" class="form-control rounded-0" />

    <label for="subject_serial_number" class="mt-2">${await __(
        "Serial Number"
    )}</label>
    <input id="subject_serial_number" name="subject_serial_number" type="text" class="form-control rounded-0" />

    <label for="subject_order" class="mt-2">${await __("Order")}</label>
    <input id="subject_order" name="subject_order" type="text" class="form-control rounded-0" />

    <label for="subject_tell" class="mt-2">${await __("Tell")}</label>
    <input id="subject_tell" name="subject_tell" type="text" class="form-control rounded-0" />

    <label for="subject_contact" class="mt-2">${await __("Contact")}</label>
    <input id="subject_contact" name="subject_contact" type="text" class="form-control rounded-0" />

    <label for="subject_file" class="mt-2">${await __(
        "File"
    )} <span class="text-danger">(.pdf, .doc, .docx)</span></label>
    <input id="subject_file" name="subject_file" type="file" class="form-control rounded-0" accept=".pdf, .doc, .docx" required />

    <label for="subject_file_image" class="mt-2">${await __(
        "File Image"
    )} <span class="text-danger">(.jpg, .jpeg, .png)</span></label>
    <input id="subject_file_image" name="subject_file_image" type="file" class="form-control rounded-0" accept=".jpg, .jpeg, .png" required />
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

async function show_main_subjects(subjects) {
    $("#tbl_subjects").html("");
    let arr_categories;
    await get_data(
        "/backend/categories/show_categories",
        (categories) => (arr_categories = categories)
    );

    subjects.forEach(async (item, i) => {
        window.navigator.languages[1].toLowerCase() == "th"
            ? (i18n_name = item.name_th)
            : (i18n_name = item.name_en);

        const arr_categories_id = item.categories_id.split(",");
        let arr_categories_name = [];
        arr_categories_id.forEach((cat) =>
            arr_categories.find((i) => {
                if (i.id == cat) {
                    window.navigator.languages[1].toLowerCase() == "th"
                        ? arr_categories_name.push(i.name_th)
                        : arr_categories_name.push(i.name_en);
                }
            })
        );
        $("#tbl_subjects").append(
            `
            <tr>
                <td>${i + 1}</td>
                <td class="text-start">${i18n_name}</td>
                <td>${item.name}</td>
                <td>${arr_categories_name.join(", ")}</td>
                <td class="d-flex gap-2">
                    <button class="btn btn-sm btn-outline-warning rounded-0"><i
                    class="fs-6 fa-solid fa-pen-to-square align-middle"></i> ${await __(
                        "Edit"
                    )}</button>

                    <button class="btn btn-sm btn-outline-danger rounded-0"><i
                    class="fs-6 fa-solid fa-trash align-middle"></i> ${await __(
                        "Delete"
                    )}</button>
                </td>
            </tr>
            `
        );
    });
}
