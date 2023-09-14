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


