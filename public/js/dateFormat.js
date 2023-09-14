function thaiDateFormat(date, time = false, short = false) {
    const getDate = new Date(date);
    let monthTh = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
    ];
    let getYear = getDate.getFullYear() + 543;
    if (short) {
        monthTh = [
            "ม.ค.",
            "ก.พ.",
            "มี.ค.",
            "เม.ย.",
            "พ.ค.",
            "มิ.ย.",
            "ก.ค.",
            "ส.ค.",
            "ก.ย.",
            "ต.ค.",
            "พ.ย.",
            "ธ.ค.",
        ];
        getYear =
            parseInt(
                getDate
                    .getFullYear()
                    .toString()
                    .substring(getDate.getFullYear().toString().length, 2)
            ) + 43;
    }
    const getMonth = getDate.getMonth();
    let hours =
        getDate.getHours() < 10 ? `0${getDate.getHours()}` : getDate.getHours();

    let minutes =
        getDate.getMinutes() < 10
            ? `0${getDate.getMinutes()}`
            : getDate.getMinutes();

    let seconds =
        getDate.getSeconds() < 10
            ? `0${getDate.getSeconds()}`
            : getDate.getSeconds();

    const getTime = `${hours}:${minutes}:${seconds}`;
    let thisDate = getDate.getDate();

    if (thisDate < 10) {
        thisDate = `0${thisDate}`;
    }
    let fullDateTh = "";
    if (time) {
        fullDateTh =
            thisDate + " " + monthTh[getMonth] + " " + getYear + " " + getTime;
    } else {
        fullDateTh = thisDate + " " + monthTh[getMonth] + " " + getYear;
    }

    return fullDateTh;
}
