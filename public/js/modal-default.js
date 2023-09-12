async function default_modal(modal_id, method, modal_title, form, url) {
    const _token = $('meta[name="csrf-token"]').attr("content");
    const _input = input_method(method);

    $("#open_modal_default").html(
        `
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${modal_title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="#" id="form_modal_default">
                            <input type="hidden" name="_token" value="${_token}" />
                            ${_input}
                            ${await form}
                        </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">${await __(
                        "Close"
                    )}</button>
                    <button type="button" id="submit_modal_default" class="btn btn-success rounded-0">${await __(
                        "Save"
                    )}</button>
                    </div>
                </div>
            </div>
        </div>
        `
    );

    $(modal_id).modal("show");

    $("#submit_modal_default").on("click", function () {
        insert(modal_id, $("#form_modal_default").serializeArray(), url);
        show_data("/backend/categories/show_categories", (categories) => {
            const group_count = group_count_data(categories);
            $("#intellectual_type #accordion").html("");
            categories.forEach((item) => {
                window.navigator.languages[1].toLowerCase() == "th"
                    ? (i18n_name = item.name_th)
                    : (i18n_name = item.name_en);

                if (item.parent == 0) {
                    $("#intellectual_type #accordion").append(
                        `
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="${item.id}">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#child_collapse_${item.id}"
                                    aria-expanded="true" aria-controls="child_collapse_${item.id}">
                                    ${i18n_name} <span
                                        class="bg-blue px-1 rounded"></span>
                                </a>
                            </h4>
                        </div>
                        <div id="child_collapse_${item.id}" class="panel-collapse collapse in" role="tabpanel"
                            aria-labelledby="${item.id}">
                            <div id="child_parent_${item.id}" class="panel-body px-4 py-2"> </div>
                        </div>
                    </div>
                    `
                    );
                }

                if (item.parent == 1) {
                    $(`#child_parent_${item.child}`).append(
                        `
                    <div class="d-flex justify-content-between category">
                        <a href="#" class="d-block">${i18n_name} <span
                                class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                        <div>
                            <a href="#" class="mx-2 text-primary"><i
                                    class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                            <a href="#" class="mx-2 text-warning"><i
                                    class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                            <a href="#" class="mx-2 text-danger"><i
                                    class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                        </div>
                    </div>
                    `
                    );
                }

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
        });
    });
}

async function form_category() {
    let parent = "";
    show_data("/backend/categories/show_categories", (categories) => {
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
        <label for="category_name_th">${await __("Name TH")}</label>
        <input id="category_name_th" name="category_name_th" type="text" class="form-control rounded-0" />

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
    `;
    return form;
}

async function form_parent_category() {
    const form = `
    <label for="category_name_th">${await __("Name TH")}</label>
    <input id="category_name_th" name="category_name_th" type="text" class="form-control rounded-0" />

    <label for="category_name_en" class="mt-2">${await __(
        "Name EN"
    )} <span class="text-danger">ไม่บังคับ</span></label>
    <input id="category_name_en" name="category_name_en" type="text" class="form-control rounded-0" />
    `;
    return form;
}
