$(document).ready(async function () {
    await get_data("/backend/users/show_users", (users) => show_users(users));
});

function submit_user(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        insert(modal_id, $("#form_modal_default").serializeArray(), url);
        await get_data("/backend/users/show_users", (users) =>
            show_users(users)
        );
    });
}

function delete_user(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        deleted(modal_id, $("#form_modal_default").serializeArray(), url);
        await get_data("/backend/users/show_users", (users) =>
            show_users(users)
        );
    });
}

function change_password(modal_id, url) {
    $("#submit_modal_default").on("click", async function () {
        updated(modal_id, $("#form_modal_default").serializeArray(), url);
        await get_data("/backend/users/show_users", (users) =>
            show_users(users)
        );
    });
}

async function form_change_password(id) {
    const form = `
    <label for="password" class="mt-2">${await __("Password")}</label>
    <input id="password" name="password" type="password" class="form-control rounded-0" autocomplete="new-password" required />

    <label for="password-confirm" class="mt-2">${await __(
        "Confirm Password"
    )}</label>
    <input id="password-confirm" name="password_confirmation" type="password" class="form-control rounded-0" autocomplete="new-password" required />
    
    <input type="hidden" name="change_password" id="change_password" value="${id}"/>
    `;
    return form;
}

async function form_user() {
    const form = `
    <label for="name">${await __("Name")}</label>
    <input id="name" name="name" type="text" class="form-control rounded-0" required />

    <label for="username" class="mt-2">${await __("Username")}</label>
    <input id="username" name="username" type="text" class="form-control rounded-0" required />

    <label for="email" class="mt-2">${await __("Email Address")}</label>
    <input id="email" name="email" type="text" class="form-control rounded-0" required />

    <label for="password" class="mt-2">${await __("Password")}</label>
    <input id="password" name="password" type="password" class="form-control rounded-0" autocomplete="new-password" required />

    <label for="password-confirm" class="mt-2">${await __(
        "Confirm Password"
    )}</label>
    <input id="password-confirm" name="password_confirmation" type="password" class="form-control rounded-0" autocomplete="new-password" required />
    `;
    return form;
}

function show_users(users) {
    const tbl_users = $("#tbl_users tbody");

    tbl_users.html("");
    users.forEach(async (item, index) => {
        tbl_users.append(
            `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.role}</td>
                    <td>${item.status}</td>
                    <td>${thaiDateFormat(item.created_at, true)}</td>
                    <td class="d-flex flex-nowrap gap-2">
                        <button class="btn btn-sm btn-outline-warning rounded-0" onclick="default_modal('#modal', 'PUT', '${await __(
                            "Confirm Change Password ?"
                        )}', form_change_password('${
                item.id
            }'), '/backend/user/change/password', 'change_password')"><i
                        class="fs-6 fa-solid fa-key align-middle"></i> เปลี่ยนรหัสผ่าน</button>
                        <button class="btn btn-sm btn-outline-danger rounded-0" onclick="default_modal('#modal', 'PUT', '${await __(
                            "Confirm Delete ?"
                        )}', form_delete_default('${item.id}', '${
                item.username
            }'), '/backend/user/delete', 'delete_user')"><i
                        class="fs-6 fa-solid fa-trash align-middle" ></i> ลบ</button>
                    </td>
                </tr>
                `
        );
    });
}
