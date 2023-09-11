$(".panel-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".panel-heading").addClass("active");
});

$(".panel-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".panel-heading").removeClass("active");
});

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
