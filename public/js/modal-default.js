async function default_modal(
    modal_id,
    method,
    modal_title,
    form,
    url,
    submit_name
) {
    try {
        const _token = $('meta[name="csrf-token"]').attr("content");
        const _input = input_method(method);
        let btn = "";
        if (submit_name.match("delete")) {
            btn = `<button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">${await __(
                "Cancel"
            )}</button>
        <button type="button" id="submit_modal_default" class="btn btn-danger rounded-0">${await __(
            "Delete"
        )}</button>`;
        } else {
            btn = `<button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">${await __(
                "Close"
            )}</button>
        <button type="button" id="submit_modal_default" class="btn btn-success rounded-0">${await __(
            "Save"
        )}</button>`;
        }

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
                        <form action="#" id="form_modal_default"></form>
                    </div>
                    <div class="modal-footer">
                    ${btn}
                    </div>
                </div>
            </div>
        </div>
        `
        );

        $(modal_id).modal("show");
        $("#form_modal_default").html(
            `<p class="text-center">${await __("Loading")}</p>`
        );

        const pending = await form;

        $("#form_modal_default").html(
            `<input type="hidden" name="_token" value="${_token}" />
            ${_input}
            `
        );
        $("#form_modal_default").append(pending);

        $("#subject_file").change(async (e) => {
            const ext = ["pdf", "word", "image"];

            let lb_file;
            let lb_file_ext;
            if (e.target.files[0].name.split(".")[1] == "pdf") {
                lb_file_ext = `<i class="fa-solid fa-file-${ext[0]} fa-2xl"></i>`;
            } else {
                lb_file_ext = `<i class="fa-solid fa-file-${ext[1]} fa-2xl"></i>`;
            }

            if (e.target.files[0]) {
                lb_file = `
        <div style="cursor:default;max-width:250px;overflow-wrap:anywhere;" for="subject_file" class="btn mt-2 border p-0 rounded d-flex flex-column text-center">
            <div class="p-5">${lb_file_ext}
            <span class="d-block">
                ${e.target.files[0].name}
            </span>
            </div>
            <div class="d-flex">
                <a href="#" class="btn btn-primary rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-eye"></i>&nbsp;ดู</a>
                <label for="subject_file" class="m-0 btn btn-warning text-white rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-pen-to-square"></i>&nbsp;แก้ไข</label>
            </div>
        </div>
        `;
            }

            $("#lb_subject_file").html(lb_file);
        });

        $("#subject_file_image").change(async (e) => {
            let lb_file_img;
            if (e.target.files[0]) {
                lb_file_img = `
        <div style="cursor:default;max-width:250px;overflow-wrap:anywhere;" for="subject_file_image" class="btn mt-2 border p-0 rounded d-flex flex-column text-center">
            <div class="p-5"><i class="fa-solid fa-file-image fa-2xl"></i>
            <span class="d-block">
                ${e.target.files[0].name}
            </span>
            </div>
            <div class="d-flex">
                <a href="#" class="btn btn-primary rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-eye"></i>&nbsp;ดู</a>
                <label for="subject_file_image" class="m-0 btn btn-warning text-white rounded-0 w-100 d-flex align-items-center justify-content-center"><i class="fa-solid fa-pen-to-square"></i>&nbsp;แก้ไข</label>
            </div>
        </div>
        `;
            }

            $("#lb_subject_file_image").html(lb_file_img);
        });

        switch (submit_name) {
            case "category":
                submit_category(modal_id, url);
                break;
            case "user":
                submit_user(modal_id, url);
                break;
            case "delete_user":
                delete_user(modal_id, url);
                break;
            case "delete_category":
                delete_category(modal_id, url);
                break;
            case "edit_category":
                edit_category(modal_id, url);
                break;
            case "change_password":
                change_password(modal_id, url);
                break;
            case "edit_parent_category":
                edit_category(modal_id, url);
                break;
            case "subject":
                submit_subject(modal_id, url);
                break;
            case "delete_subject":
                delete_subject(modal_id, url);
                break;
            case "edit_subject":
                edit_subject(modal_id, url);
                break;
            default:
                break;
        }
    } catch (error) {
        $("#form_modal_default").html("");
        $("#form_modal_default").append(
            `<p class="text-center">${await __(
                "Something went wrong. Please try again later."
            )}</p>`
        );
    }
}

async function form_delete_default(id, name) {
    const form = `
        <label>${await __("Want to delete ?", { attribute: name })}</label>
        <input type="hidden" name="delete_default" id="delete_default" value="${id}"/>
        `;
    return form;
}
