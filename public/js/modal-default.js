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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${await __(
                        "Close"
                    )}</button>
                    <button type="button" id="submit_modal_default" class="btn btn-success">${await __(
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
    });
}

async function form_category() {
    const form = `
        <label for="category_name">${await __("Name")}</label>
        <input id="category_name" name="category_name" type="text" class="form-control rounded-0" />

        <label for="category_parent">${await __("Parent Category")}</label>
        <select id="category_parent" name="category_parent" class="form-select">
            <option>ไม่มี</option>
            <option value="Engineer">Engineer</option>
        </select>
    `;
    return form;
}
