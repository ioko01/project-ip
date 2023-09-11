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
