function input_method(method) {
    const upper = method.toUpperCase();
    if (upper == "POST") {
        return "";
    } else if (upper == "GET") {
        return "";
    } else if (upper == "PUT") {
        return '<input type="hidden" name="_method" value="PUT" />';
    } else if (upper == "DELETE") {
        return '<input type="hidden" name="_method" value="DELETE" />';
    }
    return "";
}

$(document).ready(function () {
    show_data("/backend/categories/show_categories", (categories) => {
        const group_count = group_count_data(categories);

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
