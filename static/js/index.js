
// page loader js

$(document).ready(function () {
    'use strict';

    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
})

let footer_date = document.querySelector(".footer-date");
footer_date.document.write(new Date().getFullYear());