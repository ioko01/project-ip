async function insert(modal_id, data = [], url) {
    const arr_required = data.filter((item) => $(`#${item.name}:invalid`)[0]);
    data.filter(async (item) => {
        $(`#${item.name}`).removeClass("is-invalid");
        $(`#${item.name} + span`).remove();
        if ($(`#${item.name}:invalid`)) {
            $(`#${item.name}:invalid`).addClass("is-invalid");
            $(
                `<span class="d-block text-danger">${await __("required", {
                    attribute: await __(item.name),
                })}</span>`
            ).insertAfter(`#${item.name}:invalid`);
        }
    });

    if (arr_required[0]) {
        Swal.fire({
            title: await __("Error"),
            html: await __("Something went wrong. Please try again later."),
            icon: "error",
            confirmButtonColor: "#3085d6",
        });
    } else {
        $.ajax({
            method: "POST",
            url: url,
            data: data,
            success: async function (data) {
                if (data) {
                    Swal.fire({
                        title: await __("Success"),
                        html: await __("Success"),
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                } else {
                    Swal.fire({
                        title: await __("Error"),
                        html: await __("Error"),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                }

                $(modal_id).modal("hide");
            },
            beforeSend: function () {},
            error: async function (error) {
                if (!navigator.onLine) {
                    Swal.fire({
                        title: await __("Error"),
                        html: await __(
                            "No internet connection Please check your network."
                        ),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                } else if (!navigator.doNotTrack) {
                    const errors = error.responseJSON.errors;
                    for (const [key, value] of Object.entries(errors)) {
                        $(`[name=${key}]`).addClass("is-invalid");

                        $(
                            `<span class="d-block text-danger">${await __(
                                value
                            )}</span>`
                        ).insertAfter(`[name=${key}]`);
                    }

                    Swal.fire({
                        title: await __("Error"),
                        html: await __(
                            "Something went wrong. Please try again later."
                        ),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                }
            },
        });
    }
}

async function deleted(modal_id, data = [], url) {
    const arr_required = data.filter((item) => $(`#${item.name}:invalid`)[0]);

    if (arr_required[0]) {
        Swal.fire({
            title: await __("Error"),
            html: await __("Something went wrong. Please try again later."),
            icon: "error",
            confirmButtonColor: "#3085d6",
        });
    } else {
        $.ajax({
            method: "PUT",
            url: url,
            data: data,
            success: async function (data) {
                if (data) {
                    Swal.fire({
                        title: await __("Success"),
                        html: await __("Success"),
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                } else {
                    Swal.fire({
                        title: await __("Error"),
                        html: await __("Error"),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                }

                $(modal_id).modal("hide");
            },
            beforeSend: function () {},
            error: async function (error) {
                if (!navigator.onLine) {
                    Swal.fire({
                        title: await __("Error"),
                        html: await __(
                            "No internet connection Please check your network."
                        ),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                } else if (!navigator.doNotTrack) {
                    const errors = error.responseJSON.errors;
                    for (const [key, value] of Object.entries(errors)) {
                        $(`[name=${key}]`).addClass("is-invalid");

                        $(
                            `<span class="d-block text-danger">${await __(
                                value
                            )}</span>`
                        ).insertAfter(`[name=${key}]`);
                    }

                    Swal.fire({
                        title: await __("Error"),
                        html: await __(
                            "Something went wrong. Please try again later."
                        ),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                }
            },
        });
    }
}

async function updated(modal_id, data = [], url) {
    const arr_required = data.filter((item) => $(`#${item.name}:invalid`)[0]);
    data.filter(async (item) => {
        $(`#${item.name}`).removeClass("is-invalid");
        $(`#${item.name} + span`).remove();
        if ($(`#${item.name}:invalid`)) {
            $(`#${item.name}:invalid`).addClass("is-invalid");
            $(
                `<span class="d-block text-danger">${await __("required", {
                    attribute: await __(item.name),
                })}</span>`
            ).insertAfter(`#${item.name}:invalid`);
        }
    });

    if (arr_required[0]) {
        Swal.fire({
            title: await __("Error"),
            html: await __("Something went wrong. Please try again later."),
            icon: "error",
            confirmButtonColor: "#3085d6",
        });
    } else {
        $.ajax({
            method: "PUT",
            url: url,
            data: data,
            success: async function (data) {
                if (data) {
                    Swal.fire({
                        title: await __("Success"),
                        html: await __("Success"),
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                } else {
                    Swal.fire({
                        title: await __("Error"),
                        html: await __("Error"),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                }

                $(modal_id).modal("hide");
            },
            beforeSend: function () {},
            error: async function (error) {
                if (!navigator.onLine) {
                    Swal.fire({
                        title: await __("Error"),
                        html: await __(
                            "No internet connection Please check your network."
                        ),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                } else if (!navigator.doNotTrack) {
                    const errors = error.responseJSON.errors;
                    for (const [key, value] of Object.entries(errors)) {
                        $(`[name=${key}]`).addClass("is-invalid");

                        $(
                            `<span class="d-block text-danger">${await __(
                                value
                            )}</span>`
                        ).insertAfter(`[name=${key}]`);
                    }

                    Swal.fire({
                        title: await __("Error"),
                        html: await __(
                            "Something went wrong. Please try again later."
                        ),
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                }
            },
        });
    }
}

function get_data(url, handleData) {
    return $.ajax({
        method: "GET",
        url: url,
        success: function (data) {
            handleData(data);
        },
        error: function (err) {
            handleData(err);
        },
    });
}

function group_count_data(data = []) {
    const groupedCounts = data.reduce((acc, currentValue) => {
        cur = currentValue["child"];
        if (acc[cur] === undefined) {
            acc[cur] = 1;
        } else {
            acc[cur]++;
        }
        return acc;
    }, {});
    return groupedCounts;
}
