async function insert(modal_id, data = [], url, file = false) {
    const arr_required = data.filter(
        (item) => $(`#${item.name.replace("[]", "")}:invalid`)[0]
    );
    data.filter(async (item) => {
        $(`#${item.name.replace("[]", "")}`).removeClass("is-invalid");
        $(`#${item.name.replace("[]", "")} + span`).remove();
        if ($(`#${item.name.replace("[]", "")}:invalid`)) {
            $(`#${item.name.replace("[]", "")}:invalid`).addClass("is-invalid");
            $(
                `<span class="d-block text-danger">${await __("required", {
                    attribute: await __(item.name.replace("[]", "")),
                })}</span>`
            ).insertAfter(`#${item.name.replace("[]", "")}:invalid`);
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
        let formData = data;
        if (file) {
            formData = new FormData($("#form_modal_default")[0]);

            // const _token = $('meta[name="csrf-token"]').attr("content");
            $.ajaxSetup({
                processData: false,
                contentType: false,
            });
        }
        return $.ajax({
            method: "POST",
            url: url,
            data: formData,
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
            beforeSend: async function () {
                Swal.fire({
                    didOpen: () => {
                        Swal.showLoading();
                    },
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    // if (result.dismiss === Swal.DismissReason.timer) {
                    //     console.log("I was closed by the timer");
                    // }
                });
            },
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
        return $.ajax({
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
            beforeSend: async function () {
                Swal.fire({
                    didOpen: () => {
                        Swal.showLoading();
                    },
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    // if (result.dismiss === Swal.DismissReason.timer) {
                    //     console.log("I was closed by the timer");
                    // }
                });
            },
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

async function updated(modal_id, data = [], url, file = false) {
    const arr_required = data.filter(
        (item) => $(`#${item.name.replace("[]", "")}:invalid`)[0]
    );
    data.filter(async (item) => {
        $(`#${item.name.replace("[]", "")}`).removeClass("is-invalid");
        $(`#${item.name.replace("[]", "")} + span`).remove();
        if ($(`#${item.name.replace("[]", "")}:invalid`)) {
            $(`#${item.name.replace("[]", "")}:invalid`).addClass("is-invalid");
            $(
                `<span class="d-block text-danger">${await __("required", {
                    attribute: await __(item.name.replace("[]", "")),
                })}</span>`
            ).insertAfter(`#${item.name.replace("[]", "")}:invalid`);
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
        let formData = data;
        let method = "PUT";
        if (file) {
            method = "POST";
            formData = new FormData($("#form_modal_default")[0]);

            $.ajaxSetup({
                processData: false,
                contentType: false,
            });
        }

        return $.ajax({
            method: method,
            url: url,
            data: formData,
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
            beforeSend: async function () {
                Swal.fire({
                    didOpen: () => {
                        Swal.showLoading();
                    },
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    // if (result.dismiss === Swal.DismissReason.timer) {
                    //     console.log("I was closed by the timer");
                    // }
                });
            },
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
        beforeSend: function () {},
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
