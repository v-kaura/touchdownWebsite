window.onscroll = function() {scrollFunc()};
window.onload = function() {loadFunc()};

const stickyTopClass = "stickyTop";
const stickyBottomClass = "stickyBottom";

var navbar = document.getElementById("navbar");
var navbarTop = navbar.offsetTop;

var footer = document.getElementById("footerID");
var footerTop = footer.offsetTop;
var footerHeight = footer.offsetHeight;
var footerBottom = footerTop + footerHeight;

function loadFunc() {

    if ((window.pageYOffset + window.innerHeight) >= footerBottom) {
        footer.classList.add(stickyBottomClass);
    } else {
        footer.classList.remove(stickyBottomClass);
    }
}

function scrollFunc() {
    if (window.pageYOffset >= navbarTop) {
        navbar.classList.add(stickyTopClass)
    } else {
        navbar.classList.remove(stickyTopClass);
    }
}