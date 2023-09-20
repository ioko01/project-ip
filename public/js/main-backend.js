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

const range = (start, end) =>
    [...Array(end - start).keys()].map((k) => k + start);

function get_page(total_items, current_page, page_size) {
    const total_pages = Math.ceil(total_items / page_size);
    let start_page, end_page;
    const pagi_amount = 5;

    if (total_pages <= pagi_amount) {
        start_page = 1;
        end_page = total_pages;
    } else {
        if (current_page < pagi_amount) {
            start_page = 1;
            end_page = pagi_amount;
        } else {
            start_page =
                parseInt(current_page) - ((current_page % pagi_amount) + 1);
            end_page =
                parseInt(current_page) -
                ((current_page % pagi_amount) + 1) +
                pagi_amount +
                1;
            if (current_page == end_page) {
                start_page = parseInt(current_page) - 1;
                end_page = parseInt(current_page) + pagi_amount;
            }
        }
        if (end_page > total_pages) {
            end_page = total_pages;
        }
    }

    const startIndex = (current_page - 1) * page_size;
    const endIndex = Math.min(startIndex + page_size - 1, total_items - 1);

    const pages = range(start_page, end_page + 1);
    return {
        totalItems: total_items,
        currentPage: current_page,
        pageSize: page_size,
        totalPages: total_pages,
        startPage: start_page,
        endPage: end_page,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
    };
}

function onclick_pagination(event, handleData) {
    $(".page-link").removeClass("active");
    $(event).addClass("active");
    handleData();
}

function load_icon_onclick(event, amount, icon) {
    load_icons($(event).html(), amount, icon);
    const pages = get_page(icons.length, $(event).html(), amount);
    pagination(pages, amount, $(event).html(), icon);
}

function pagination(pages, amount, current_page = 1, this_icon = "") {
    let all_pages = "";
    pages.pages.forEach((page) => {
        all_pages += `<li class="page-item"><a class="page-link ${
            page == current_page ? "active" : ""
        }" href="#" onclick="onclick_pagination(this, () => load_icon_onclick(this, ${amount}, '${this_icon}'))">${page}</a></li>`;
    });
    const paginate = `
    <nav>
        <ul class="pagination justify-content-center">
            ${all_pages}
        </ul>
    </nav>
    `;
    $("#paginate").html(paginate);
    return paginate;
}

function load_icons(current_page, page_size, this_icon = "") {
    let icon_list = "";
    const pages = get_page(icons.length, current_page, page_size);
    icons.forEach((icon, index) => {
        if (index >= pages.startIndex && index <= pages.endIndex) {
            icon_list += `
            <div class="form-check-inline m-0">
                <input class="check-design d-none" type="radio" name="icon" id="${icon}" value="${icon}" ${
                this_icon == icon ? "checked" : ""
            }>
                <label style="width: 70px;" class="lb-check-design" for="${icon}">
                    <i class='fa-solid fa-${icon}'></i>
                </label>
            </div>
            `;
        } else if (index > pages.endIndex) {
            return;
        }
    });

    $("#show_icon").html(icon_list);
    return icon_list;
}
