async function default_modal(
    modal_id,
    method,
    modal_title,
    form,
    url,
    submit_name
) {
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
                        <form action="#" id="form_modal_default">
                            <input type="hidden" name="_token" value="${_token}" />
                            ${_input}
                            ${await form}
                        </form>
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
        default:
            break;
    }
}

async function form_delete_default(id, name) {
    const form = `
        <label>${await __("Want to delete ?", { attribute: name })}</label>
        <input type="hidden" name="delete_default" id="delete_default" value="${id}"/>
        `;
    return form;
}
