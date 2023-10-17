$(document).ready(async function () {
    await get_data("/backend/subjects/show_subjects", (subjects) =>
        show_main_subjects(subjects)
    );
});

async function form_subject() {
    let all_category = "";
    let budget_year = "";
    await get_data("/backend/categories/show_categories", (categories) => {
        categories.forEach((item) => {
            if ($("html").attr("lang").toLowerCase() == "th") {
                i18n_name = item.name_th;
            } else {
                if (item.name_en) {
                    i18n_name = item.name_en;
                } else {
                    i18n_name = item.name_th;
                }
            }

            if (item.parent == 0) {
                parent = item.id;
                all_category += `
                <label class="form-check-label text-primary" for="${item.id}">
                ${i18n_name}
                </label>`;
            }

            const child = categories.filter((c) => item.id == c.child);
            child.forEach((res) => {
                if ($("html").attr("lang").toLowerCase() == "th") {
                    i18n_name_child = res.name_th;
                } else {
                    if (res.name_en) {
                        i18n_name_child = res.name_en;
                    } else {
                        i18n_name_child = res.name_th;
                    }
                }

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

    let year = new Date().getFullYear() + 543;

    for (let i = 0; i < 50; i++) {
        year_option = year - i + 1;
        budget_year += `<option value="${year_option}" ${
            year == year_option ? "selected" : ""
        }>${year_option}</option>`;
    }

    const form = `

    <label for="subject_categories">${await __("Categories")}</label>
    <div class="border p-3">
        <div class="form-check">
            ${all_category}
        </div>
    </div>

    <label for="budget_year" class="mt-2">${await __("Budget Year")}</label>
    <select class="form-select rounded-0" id="budget_year" name="budget_year" required>
        ${budget_year}
    </select>

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

    <div id="lb_subject_file">
        <label style="cursor:pointer;max-width:250px;" for="subject_file" class="btn btn-light mt-2 border rounded p-5 d-flex flex-column text-center">
            <i class="fa-solid fa-plus fa-2xl"></i>
            <h5>${await __(
                "File"
            )} 10 MB <span class="text-danger d-block"> (.pdf, .doc, .docx)</span></h5>
        </label>
    </div>
    <input id="subject_file" name="subject_file" type="file" class="form-control rounded-0 d-none" accept=".pdf, .doc, .docx" required />
    
    
    
    <div id="lb_subject_file_image">
        <label style="cursor:pointer;max-width:250px;" for="subject_file_image" class="btn btn-light mt-2 border rounded p-5 d-flex flex-column text-center">
            <i class="fa-solid fa-plus fa-2xl"></i>
            <h5>${await __(
                "File Image"
            )} 10 MB <span class="text-danger d-block"> (.jpg, .jpeg, .png)</span></h5>
        </label>
    </div>
    
    <input id="subject_file_image" name="subject_file_image" type="file" class="form-control rounded-0 d-none" accept=".jpg, .jpeg, .png" required />
    `;
    return form;
}

async function from_edit_subject(id) {
    let all_category = "";
    let budget_year = "";
    let data = {
        categories_id: "",
        name_th: "",
        name_en: "",
        budget_year: "",
        author: "",
        license: "",
        serial_number: "",
        order: "",
        tell: "",
        contact: "",
    };
    let file = {
        id: "",
        subject_id: "",
        file: "",
        file_extension: "",
        id: "",
        image: "",
        image_extension: "",
        subject_id: "",
    };

    await get_data("/backend/subjects/show_subjects", (subjects) => {
        subjects.forEach((item) => {
            if (item.id == id) {
                data.categories_id = item.categories_id;
                data.name_th = item.name_th;
                data.name_en = item.name_en;
                data.budget_year = item.budget_year;
                data.author = item.author;
                data.license = item.license;
                data.serial_number = item.serial_number;
                data.order = item.order;
                data.tell = item.tell;
                data.contact = item.contact;
            }
        });
    });

    await get_data("/backend/files/show_files/" + id, (files) => {
        files.forEach((item) => {
            file.id = item.id;
            file.file = item.file;
            file.file_extension = item.file_extension;
            file.image = item.image;
            file.image_extension = item.image_extension;
            file.subject_id = item.subject_id;
        });
    });

    await get_data("/backend/categories/show_categories", (categories) => {
        categories.forEach((item) => {
            if ($("html").attr("lang").toLowerCase() == "th") {
                i18n_name = item.name_th;
            } else {
                if (item.name_en) {
                    i18n_name = item.name_en;
                } else {
                    i18n_name = item.name_th;
                }
            }

            if (item.parent == 0) {
                parent = item.id;
                all_category += `
                <label class="form-check-label text-primary" for="${item.id}">
                ${i18n_name}
                </label>`;
            }

            const child = categories.filter((c) => item.id == c.child);
            child.forEach((res) => {
                if ($("html").attr("lang").toLowerCase() == "th") {
                    i18n_name_child = res.name_th;
                } else {
                    if (res.name_en) {
                        i18n_name_child = res.name_en;
                    } else {
                        i18n_name_child = res.name_th;
                    }
                }

                const split = data.categories_id
                    .split(",")
                    .filter((c) => c == res.id);

                if (res.parent == 1) {
                    all_category += `
                    <div class="ms-5">
                        <input name="subject_categories[]" class="form-check-input" type="checkbox" value="${
                            res.id
                        }" id="${res.id}" ${split[0] ? "checked" : ""}>
                        <label class="form-check-label" for="${res.id}">
                        ${i18n_name_child}
                        </label>
                    </div>
                    `;
                }
            });
        });
    });

    let year = new Date().getFullYear() + 543;

    for (let i = 0; i < 50; i++) {
        year_option = year - i + 1;
        budget_year += `<option value="${year_option}" ${
            data.budget_year == year_option ? "selected" : ""
        }>${year_option}</option>`;
    }

    const ext = ["pdf", "word", "image"];

    let lb_file;
    let lb_file_ext;
    if (file.file_extension == "pdf") {
        lb_file_ext = `<i class="fa-solid fa-file-${ext[0]} fa-2xl"></i>`;
    } else {
        lb_file_ext = `<i class="fa-solid fa-file-${ext[1]} fa-2xl"></i>`;
    }

    if (file.file) {
        lb_file = `
        <div style="cursor:default;max-width:250px;overflow-wrap:anywhere;" for="subject_file" class="btn mt-2 border p-0 rounded d-flex flex-column text-center">
            <div class="p-5">${lb_file_ext}
            <span class="d-block">
                ${file.file.split(file.id + "/")[1]}
            </span>
            </div>
            <div class="d-flex">
                <a href="#" class="btn btn-primary rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-eye"></i>&nbsp;ดู</a>
                <label for="subject_file" class="m-0 btn btn-warning text-white rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-pen-to-square"></i>&nbsp;แก้ไข</label>
            </div>
        </div>
        `;
    }

    let lb_image;
    let lb_image_ext;
    if (file.image_extension) {
        lb_image_ext = `<i class="fa-solid fa-file-${ext[2]} fa-2xl"></i>`;
    }

    if (file.image) {
        lb_image = `
        <div style="cursor:default;max-width:250px;overflow-wrap:anywhere;" class="btn mt-2 border p-0 rounded d-flex flex-column text-center">
            <div class="p-5">${lb_image_ext}
            <span class="d-block">
            ${file.image.split(file.id + "/")[1]}
            </span></div>
        <div class="d-flex">
                <a href="#" class="btn btn-primary rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-eye"></i>&nbsp;ดู</a>
                <label for="subject_file_image" class="m-0 btn btn-warning text-white rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-pen-to-square"></i>&nbsp;แก้ไข</label>
            </div>
        </div>
        `;
    }

    const form = `
    <input type="hidden" value="${id}" name="subject_id" id="subject_id"/>
    <label for="subject_categories">${await __("Categories")}</label>
    <div class="border p-3">
        <div class="form-check">
            ${all_category}
        </div>
    </div>

    <label for="budget_year" class="mt-2">${await __("Budget Year")}</label>
    <select class="form-select rounded-0" id="budget_year" name="budget_year" required>
        ${budget_year}
    </select>

    <label for="subject_name_th" class="mt-2">${await __(
        "Subject Name TH"
    )}</label>
    <input value="${
        data.name_th
    }" id="subject_name_th" name="subject_name_th" type="text" class="form-control rounded-0" required />

    <label for="subject_name_en" class="mt-2">${await __(
        "Subject Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input value="${
        data.name_en ? data.name_en : ""
    }" id="subject_name_en" name="subject_name_en" type="text" class="form-control rounded-0" />

    <label for="subject_author" class="mt-2">${await __("Author")}</label>
    <input value="${
        data.author ? data.author : ""
    }" id="subject_author" name="subject_author" type="text" class="form-control rounded-0" required />

    <label for="subject_license" class="mt-2">${await __("License")}</label>
    <input value="${
        data.license ? data.license : ""
    }" id="subject_license" name="subject_license" type="text" class="form-control rounded-0" />

    <label for="subject_serial_number" class="mt-2">${await __(
        "Serial Number"
    )}</label>
    <input value="${
        data.serial_number ? data.serial_number : ""
    }" id="subject_serial_number" name="subject_serial_number" type="text" class="form-control rounded-0" />

    <label for="subject_order" class="mt-2">${await __("Order")}</label>
    <input value="${
        data.order ? data.order : ""
    }" id="subject_order" name="subject_order" type="text" class="form-control rounded-0" />

    <label for="subject_tell" class="mt-2">${await __("Tell")}</label>
    <input value="${
        data.tell ? data.tell : ""
    }" id="subject_tell" name="subject_tell" type="text" class="form-control rounded-0" />

    <label for="subject_contact" class="mt-2">${await __("Contact")}</label>
    <input value="${
        data.contact ? data.contact : ""
    }" id="subject_contact" name="subject_contact" type="text" class="form-control rounded-0" />

    ${lb_file}
    <input id="subject_file" name="subject_file" type="file" class="form-control rounded-0 d-none" accept=".pdf, .doc, .docx" />

    ${lb_image}
    <input id="subject_file_image" name="subject_file_image" type="file" class="form-control rounded-0 d-none" accept=".jpg, .jpeg, .png" />
    `;
    return form;
}

function submit_subject(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        const insert_subject = await insert(
            modal_id,
            $("#form_modal_default").serializeArray(),
            url,
            true
        );
        if (insert_subject) {
            await get_data("/backend/subjects/show_subjects", (subjects) =>
                show_main_subjects(subjects)
            );
        }
    });
}

function edit_subject(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        await updated(
            modal_id,
            $("#form_modal_default").serializeArray(),
            url,
            true
        );
        await get_data("/backend/subjects/show_subjects", (subjects) =>
            show_main_subjects(subjects)
        );
    });
}

function delete_subject(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        await deleted(modal_id, $("#form_modal_default").serializeArray(), url);
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
        if ($("html").attr("lang").toLowerCase() == "th") {
            i18n_name = item.name_th;
        } else {
            if (item.name_en) {
                i18n_name = item.name_en;
            } else {
                i18n_name = item.name_th;
            }
        }

        const arr_categories_id = item.categories_id.split(",");
        let arr_categories_name = [];
        arr_categories_id.forEach((cat) =>
            arr_categories.find((i) => {
                if (i.id == cat) {
                    $("html").attr("lang").toLowerCase() == "th"
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
                <button class="btn btn-sm btn-outline-warning rounded-0" onclick="default_modal('#modal', 'PUT', '${await __(
                    "Confirm Edit ?"
                )}', from_edit_subject('${
                item.id
            }'), '/backend/subject/edit', 'edit_subject')"><i
                        class="fs-6 fa-solid fa-pen-to-square align-middle"></i> ${await __(
                            "Edit"
                        )}</button>

                        <button class="btn btn-sm btn-outline-danger rounded-0" onclick="default_modal('#modal', 'PUT', '${await __(
                            "Confirm Delete ?"
                        )}', form_delete_default('${
                item.id
            }', '${i18n_name}'), '/backend/subject/delete', 'delete_subject')"><i
                                class="fs-6 fa-solid fa-trash align-middle"></i> ${await __(
                                    "Delete"
                                )}</button>
                </td>
            </tr>
            `
        );
    });
}
