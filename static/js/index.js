
// page loader js

$(document).ready(function () {
    'use strict';

    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
})

let footer_date = document.querySelector(".footer-date");
footer_date.addEventListener("load", function name(params) {
    // document.write(new Date().getFullYear());
    let currentYear = new Date().getFullYear();
    footer_date.innerHTML = currentYear;
})