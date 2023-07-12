function color(params) {
    var a = getComputedStyle(params);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = b;
}