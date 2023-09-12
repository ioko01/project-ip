async function insert(modal_id, data, url) {
    if (!data[1].value) {
        Swal.fire({
            title: await __("Error"),
            html: await __("Required", { name: await __("Category") }),
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

function show_data(url, handleData) {
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
