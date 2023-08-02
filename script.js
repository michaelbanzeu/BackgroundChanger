let colors = document.getElementsByTagName('span');
for (const color of colors) {
    color.addEventListener('click', switchColor);
}

function switchColor(e) {
    document.getElementsByTagName('body')[0].style.backgroundColor = getComputedStyle(e.target).backgroundColor;
}