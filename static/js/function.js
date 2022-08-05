function setCookie(name, value, days = 1) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); }
    return null;
}

function eraseCookie(name) { document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; }

function numberWithCommas(x, m = 0) {
    if (m) return x;
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function number_format(b, f = -1, m = 0) {
    var a = parseFloat(b);
    if (b == 0) return 0;
    if (f >= 0) return numberWithCommas(a.toFixed(f), m);
    if (a > 1000) return numberWithCommas(a.toFixed(2), m);
    if (a > 10) return numberWithCommas(a.toFixed(3), m);
    if (a > 1) return numberWithCommas(a.toFixed(4), m);
    if (a > 0.1) return numberWithCommas(a.toFixed(5), m);
    if (a > 0.001)
        return numberWithCommas(a.toFixed(8), m);
    return a.toFixed(8);
}