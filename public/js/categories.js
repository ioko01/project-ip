$(document).ready(async function () {
    await get_data("/backend/categories/show_categories", (categories) =>
        show_main_categories(categories)
    );
});

const current_page = 1;
const amount = 100;

async function form_edit_child_category(id, parent_id) {
    let parent = "";
    let data = {
        name_th: "",
        name_en: "",
        icon: "",
    };
    let form = "";

    await get_data("/backend/categories/show_categories", (categories) => {
        categories.forEach((item) => {
            window.navigator.languages[1].toLowerCase() == "th"
                ? (i18n_name = item.name_th)
                : (i18n_name = item.name_en);
            let selected = "";
            if (item.id == parent_id) {
                selected = "selected";
            }
            if (item.parent == 0) {
                parent += `<option value="${item.id}" ${selected}>${i18n_name}</option>`;
            }
            if (item.id == id) {
                data.name_th = item.name_th;
                data.name_en = item.name_en;
                data.icon = item.icon;
            }
        });
    });

    const show_icon = load_icons(current_page, amount, data.icon);
    const pages = get_page(icons.length, current_page, amount);
    const paginate = pagination(pages, amount, 1, data.icon);

    form = `
    <input type="hidden" value="${id}" name="category_id" id="category_id"/>
    <label for="category_name_th">${await __("Name TH")}</label>
    <input value="${
        data.name_th
    }" id="category_name_th" name="category_name_th" type="text" class="form-control rounded-0" required />

    <label for="category_name_en" class="mt-2">${await __(
        "Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input value="${
        data.name_en ? data.name_en : ""
    }" id="category_name_en" name="category_name_en" type="text" class="form-control rounded-0" />

    <label for="category_parent" class="mt-2">${await __(
        "Parent Category"
    )}</label>
    <select id="category_parent" name="category_parent" class="form-select">
        ${parent}
    </select>

    <label class="mt-2 w-100">${await __("Icon")}</label>
    
    <div id="show_icon" style="height:300px;overflow:auto;" class="text-center mb-3">${show_icon}</div>
    <div id="paginate">${paginate}</div>
    
`;
    return form;
}

async function form_edit_parent_category(id) {
    let data = {
        name_th: "",
        name_en: "",
        icon: "",
    };
    let form = "";

    await get_data("/backend/categories/show_categories", (categories) => {
        categories.forEach((item) => {
            window.navigator.languages[1].toLowerCase() == "th"
                ? (i18n_name = item.name_th)
                : (i18n_name = item.name_en);

            if (item.id == id) {
                data.name_th = item.name_th;
                data.name_en = item.name_en;
                data.icon = item.icon;
            }
        });
    });

    const show_icon = load_icons(current_page, amount, data.icon);
    const pages = get_page(icons.length, current_page, amount);
    const paginate = pagination(pages, amount, 1, data.icon);

    form = `
    <input type="hidden" value="${id}" name="category_id" id="category_id"/>
    <label for="category_name_th">${await __("Name TH")}</label>
    <input value="${
        data.name_th
    }" id="category_name_th" name="category_name_th" type="text" class="form-control rounded-0" required />

    <label for="category_name_en" class="mt-2">${await __(
        "Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input value="${
        data.name_en ? data.name_en : ""
    }" id="category_name_en" name="category_name_en" type="text" class="form-control rounded-0" />

    <label class="mt-2 w-100">${await __("Icon")}</label>
    
    <div id="show_icon" style="height:300px;overflow:auto;" class="text-center mb-3">${show_icon}</div>
    <div id="paginate">${paginate}</div>
    
`;
    return form;
}

async function form_parent_category() {
    const show_icon = load_icons(current_page, amount);
    const pages = get_page(icons.length, current_page, amount);
    const paginate = pagination(pages, amount, 1);

    const form = `
    <label for="category_name_th">${await __("Name TH")}</label>
    <input id="category_name_th" name="category_name_th" type="text" class="form-control rounded-0" required />

    <label for="category_name_en" class="mt-2">${await __(
        "Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input id="category_name_en" name="category_name_en" type="text" class="form-control rounded-0" />
    
    <label class="mt-2 w-100">${await __("Icon")}</label>
    
    <div id="show_icon" style="height:300px;overflow:auto;" class="text-center mb-3">${show_icon}</div>
    <div id="paginate">${paginate}</div>
    `;
    return form;
}

async function form_category() {
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

    const show_icon = load_icons(current_page, amount);
    const pages = get_page(icons.length, current_page, amount);
    const paginate = pagination(pages, amount, 1);

    const form = `
        <label for="category_name_th">${await __("Name TH")}</label>
        <input id="category_name_th" name="category_name_th" type="text" class="form-control rounded-0" required />

        <label for="category_name_en" class="mt-2">${await __(
            "Name EN"
        )} <span class="text-danger">ไม่บังคับ</span></label>
        <input id="category_name_en" name="category_name_en" type="text" class="form-control rounded-0" />

        <label for="category_parent" class="mt-2">${await __(
            "Parent Category"
        )}</label>
        <select id="category_parent" name="category_parent" class="form-select">
            ${parent}
        </select>

        <label class="mt-2 w-100">${await __("Icon")}</label>
        
        <div id="show_icon" style="height:300px;overflow:auto;" class="text-center mb-3">${show_icon}</div>
        <div id="paginate">${paginate}</div>
    `;
    return form;
}

function delete_category(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        deleted(modal_id, $("#form_modal_default").serializeArray(), url);
        await get_data("/backend/categories/show_categories", (categories) =>
            show_main_categories(categories)
        );
    });
}

function submit_category(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        insert(modal_id, $("#form_modal_default").serializeArray(), url);
        await get_data("/backend/categories/show_categories", (categories) =>
            show_main_categories(categories)
        );
    });
}

function edit_category(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        updated(modal_id, $("#form_modal_default").serializeArray(), url);
        await get_data("/backend/categories/show_categories", (categories) =>
            show_main_categories(categories)
        );
    });
}

function show_main_categories(categories) {
    const group_count = group_count_data(categories);
    $("#intellectual_type #accordion").html("");
    let i18n_name = [];
    categories.forEach(async (item, i) => {
        window.navigator.languages[1].toLowerCase() == "th"
            ? (i18n_name[i] = item.name_th)
            : (i18n_name[i] = item.name_en);

        if (item.parent == 0) {
            $("#intellectual_type #accordion").append(
                `
                    <div class="panel panel-default mb-2">
                        <div class="panel-heading" role="tab" id="${item.id}">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#child_collapse_${
                                    item.id
                                }"
                                    aria-expanded="true" aria-controls="child_collapse_${
                                        item.id
                                    }">
                                    <i class="fa-solid fa-${item.icon}"></i> ${
                    i18n_name[i]
                } <span
                                        class="bg-blue px-1 rounded"></span>
                                </a>
                                
                            </h4>
                        </div>
                        <div class="d-flex flex-nowrap gap-2">
                            <button class="btn btn-sm btn-outline-warning rounded-0 px-2" onclick="default_modal('#modal', 'PUT', '${await __(
                                "Confirm Edit ?"
                            )}', form_edit_parent_category('${
                    item.id
                }'), '/backend/category/parent/edit', 'edit_parent_category')"><i
                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i>  ${await __(
                                "Edit"
                            )}</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-2" onclick="default_modal('#modal', 'PUT', '${await __(
                                "Confirm Delete ?"
                            )}', form_delete_default('${item.id}', '${
                    i18n_name[i]
                }'), '/backend/category/delete', 'delete_category')"><i
                            class="fs-6 fa-solid fa-trash align-middle"></i>  ${await __(
                                "Delete"
                            )}</button>
                        </div>
                        <div id="child_collapse_${
                            item.id
                        }" class="panel-collapse collapse in" role="tabpanel"
                            aria-labelledby="${item.id}">
                            <div id="child_parent_${
                                item.id
                            }" class="panel-body px-4 py-2"> </div>
                        </div>
                    </div>
                    `
            );
        }

        let child = "";
        if (item.parent == 1) {
            child += `
            <div class="d-flex justify-content-between category">
                <a href="#" class="d-block"><i class="fa-solid fa-${
                    item.icon
                }"></i>  ${i18n_name[i]}</a>
                <div class="d-flex flex-nowrap gap-2">
                    <button class="btn btn-sm btn-outline-warning rounded-0" onclick="default_modal('#modal', 'PUT', '${await __(
                        "Confirm Edit ?"
                    )}', form_edit_child_category('${item.id}', '${
                item.child
            }', '${
                i18n_name[i]
            }'), '/backend/category/child/edit', 'edit_category')"><i
                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> ${await __(
                                "Edit"
                            )}</button>
                    <button class="btn btn-sm btn-outline-danger rounded-0" onclick="default_modal('#modal', 'PUT', '${await __(
                        "Confirm Delete ?"
                    )}', form_delete_default('${item.id}', '${
                i18n_name[i]
            }'), '/backend/category/delete', 'delete_category')"><i
                            class="fs-6 fa-solid fa-trash align-middle"></i> ${await __(
                                "Delete"
                            )}</button>
                </div>
            </div>
            `;
        }
        $(`#child_parent_${item.child}`).append(child);

        $(`#${item.id} .panel-title a span`).html(
            group_count[item.id] ? group_count[item.id] : 0
        );
    });
    $(".panel-collapse").on("show.bs.collapse", function () {
        $(this).siblings(".panel-heading").addClass("active");
    });

    $(".panel-collapse").on("hide.bs.collapse", function () {
        $(this).siblings(".panel-heading").removeClass("active");
    });
}
