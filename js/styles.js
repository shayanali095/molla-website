const closeBtn = document.querySelector(".modal__close");
const openVideo = document.querySelector(".new_collection .play_video");
const modal = document.querySelector('.modal');
let modal_content = document.querySelector(".modal__content");

//////////////////////
/////////////////////////popup video coding////////////////////////
/////////////////////////

closeBtn.addEventListener('click', function() {
    modal.classList.add("visibility");
    modal_content.innerHTML = '';
});

openVideo.addEventListener('click', function() {
    modal_content.innerHTML = `<iframe width="700" height="400" src="https://www.youtube.com/embed/OaVsCM0Zeio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.remove("visibility");
});

/////////////////////////////
///////////////////////color radio buttons coding///////////////////////
////////////////////////////

let previous_target = null;
let status_target = false;
$(document).ready(function() {
    $('.card1_color_button button, .card3_color_button button, .card5_color_button button').click(function(e) {
        if (status_target !== false) {
            e.target.classList.add("btn_outline");
            previous_target.classList.remove("btn_outline");
            previous_target = e.target;
            status_target = !status_target;
        } else {
            e.target.classList.add("btn_outline");
            if (previous_target !== null) { previous_target.classList.remove("btn_outline"); }
            previous_target = e.target;
            status_target = !status_target;
        }
        console.log(e.target);

    });
});

/////////////////////////////
///////////////////////color radio buttons coding///////////////////////
////////////////////////////

let previous_color_target = null;
let status_color_target = false;
$(document).ready(function() {
    $('.card_color_button span').click(function(e) {
        if (status_color_target !== false) {
            e.target.classList.add("btn_outline");
            previous_color_target.classList.remove("btn_outline");
            previous_color_target = e.target;
            status_color_target = !status_color_target;
        } else {
            e.target.classList.add("btn_outline");
            if (previous_color_target !== null) { previous_color_target.classList.remove("btn_outline"); }
            previous_color_target = e.target;
            status_color_target = !status_color_target;
        }
        console.log(e.target);

    });
});

/////////////////////////
////////////////////////slider coding section//////////////////////
///////////////////////////

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper1-button-next",
        prevEl: ".swiper1-button-prev"
    }
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper2-button-next",
        prevEl: ".swiper2-button-prev"
    }
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper3-button-next",
        prevEl: ".swiper3-button-prev"
    }
});

var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper4-button-next",
        prevEl: ".swiper4-button-prev"
    }
});


var swiper = new Swiper(".header_image_swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".header_image_swiper .swiper-pagination",
        clickable: true
    }
});

/////////////////////////////////
///////////////////////////////////header dropdown coding/////////////////////
//////////////////////////////

let dropdown_previous_target = null;
let dropdown_previous_target2 = null;
let dropdown_status_target = false;
let dropdown_active = false;
// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function(el) {
    var button = el.querySelector('a[data-toggle="dropdown"]'),
        menu = el.querySelector('.dropdown-menu'),
        arrow = button.querySelector('i.icon-arrow');

    button.onclick = function(event) {
        if (dropdown_status_target !== false) {
            if (dropdown_previous_target === menu) {
                menu.classList.remove('show');
                menu.classList.add('hide');
                arrow.classList.remove('open');
                arrow.classList.add('close');
                event.preventDefault();
                dropdown_status_target = !dropdown_status_target;
            } else {
                dropdown_previous_target.classList.remove("show");
                dropdown_previous_target.classList.add("hide");
                dropdown_previous_target2.classList.remove("open");
                dropdown_previous_target2.classList.add("close");
                dropdown_previous_target.closest(".dropdown").classList.remove("dropdown_active");
                if (!dropdown_previous_target.closest(".dropdown").hasClass("dropdown_active")) {
                    menu.closest(".dropdown").classList.add("dropdown_active");

                } else {
                    dropdown_previous_target.closest(".dropdown").classList.remove("dropdown_active");
                    menu.closest(".dropdown").classList.add("dropdown_active");

                }
                menu.classList.add('show');
                menu.classList.remove('hide');
                arrow.classList.add('open');
                arrow.classList.remove('close');
                event.preventDefault();
                dropdown_previous_target = menu;
                dropdown_previous_target2 = arrow;
            }

        } else {

            if (!menu.hasClass('show')) {
                menu.classList.add('show');
                menu.classList.remove('hide');
                arrow.classList.add('open');
                arrow.classList.remove('close');
                event.preventDefault();

                if (dropdown_previous_target == null) {
                    menu.closest(".dropdown").classList.add("dropdown_active");
                    dropdown_previous_target = menu;
                    dropdown_previous_target2 = arrow;
                    dropdown_status_target = !dropdown_status_target;

                } else if (!dropdown_previous_target.closest(".dropdown").hasClass("dropdown_active")) {
                    menu.closest(".dropdown").classList.add("dropdown_active");
                    dropdown_previous_target = menu;
                    dropdown_previous_target2 = arrow;
                    dropdown_status_target = !dropdown_status_target;
                } else {
                    dropdown_previous_target.closest(".dropdown").classList.remove("dropdown_active");
                    menu.closest(".dropdown").classList.add("dropdown_active");
                    dropdown_previous_target = menu;
                    dropdown_previous_target2 = arrow;
                    dropdown_status_target = !dropdown_status_target;

                }
            }
        }
    };
})


Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

/////////////////////////////////
////////////////////////////swiper toggling coding////////////////////
////////////////////////////////


const all_sec = document.querySelector("#all");
const women_sec = document.querySelector("#women");
const men_sec = document.querySelector("#men");
const accessories_sec = document.querySelector("#accessories");

const swiper_container1 = document.querySelector(".swiper_container1");
const swiper_container2 = document.querySelector(".swiper_container2");
const swiper_container3 = document.querySelector(".swiper_container3");
const swiper_container4 = document.querySelector(".swiper_container4");
all_sec.addEventListener("click", function(e) {
    e.preventDefault();

    if (swiper_container1.hasClass("cards_visibility")) {
        swiper_container1.classList.remove("cards_visibility");
        swiper_container2.classList.add("cards_visibility");
        swiper_container3.classList.add("cards_visibility");
        swiper_container4.classList.add("cards_visibility");
        women_sec.classList.remove("border");
        men_sec.classList.remove("border");
        accessories_sec.classList.remove("border");
        all_sec.classList.add("border");
    } else {
        all_sec.classList.add("border");
    }

});
women_sec.addEventListener("click", function(e) {
    e.preventDefault();
    if (swiper_container2.hasClass("cards_visibility")) {
        swiper_container2.classList.remove("cards_visibility");
        swiper_container1.classList.add("cards_visibility");
        swiper_container3.classList.add("cards_visibility");
        swiper_container4.classList.add("cards_visibility");
        all_sec.classList.remove("border");
        men_sec.classList.remove("border");
        accessories_sec.classList.remove("border");
        women_sec.classList.add("border");
    }
});
men_sec.addEventListener("click", function(e) {
    e.preventDefault();
    if (swiper_container3.hasClass("cards_visibility")) {
        swiper_container3.classList.remove("cards_visibility");
        swiper_container1.classList.add("cards_visibility");
        swiper_container2.classList.add("cards_visibility");
        swiper_container4.classList.add("cards_visibility");
        all_sec.classList.remove("border");
        women_sec.classList.remove("border");
        accessories_sec.classList.remove("border");
        men_sec.classList.add("border");
    }
});
accessories_sec.addEventListener("click", function(e) {
    e.preventDefault();
    if (swiper_container4.hasClass("cards_visibility")) {
        swiper_container4.classList.remove("cards_visibility");
        swiper_container1.classList.add("cards_visibility");
        swiper_container2.classList.add("cards_visibility");
        swiper_container3.classList.add("cards_visibility");
        all_sec.classList.remove("border");
        women_sec.classList.remove("border");
        men_sec.classList.remove("border");
        accessories_sec.classList.add("border");
    }
});




const all_newArrival = document.querySelector("#newArrivals_All");
const cloth_newArrival = document.querySelector("#newArrivals_Clothing");
const shoes_newArrival = document.querySelector("#newArrivals_shoes_bags");
const accessories_newArrival = document.querySelector("#newArrivals_accessories");

const all_section_cards = document.querySelector(".all_section_cards");
const clothing_section_cards = document.querySelector(".clothing_section_cards");
const shoes_boats_cards = document.querySelector(".shoes_boats_cards");
const accessories_section_cards = document.querySelector(".accessories_section_cards");
all_newArrival.addEventListener("click", function(e) {
    e.preventDefault();

    if (all_section_cards.hasClass("cards_visibility")) {
        all_section_cards.classList.remove("cards_visibility");
        clothing_section_cards.classList.add("cards_visibility");
        shoes_boats_cards.classList.add("cards_visibility");
        accessories_section_cards.classList.add("cards_visibility");
        cloth_newArrival.classList.remove("border");
        shoes_newArrival.classList.remove("border");
        accessories_newArrival.classList.remove("border");
        all_newArrival.classList.add("border");
    } else {
        all_newArrival.classList.add("border");
    }

});
cloth_newArrival.addEventListener("click", function(e) {
    e.preventDefault();
    if (clothing_section_cards.hasClass("cards_visibility")) {
        clothing_section_cards.classList.remove("cards_visibility");
        all_section_cards.classList.add("cards_visibility");
        shoes_boats_cards.classList.add("cards_visibility");
        accessories_section_cards.classList.add("cards_visibility");
        all_newArrival.classList.remove("border");
        shoes_newArrival.classList.remove("border");
        accessories_newArrival.classList.remove("border");
        cloth_newArrival.classList.add("border");
    }
});
shoes_newArrival.addEventListener("click", function(e) {
    e.preventDefault();
    if (shoes_boats_cards.hasClass("cards_visibility")) {
        shoes_boats_cards.classList.remove("cards_visibility");
        all_section_cards.classList.add("cards_visibility");
        clothing_section_cards.classList.add("cards_visibility");
        accessories_section_cards.classList.add("cards_visibility");
        all_newArrival.classList.remove("border");
        cloth_newArrival.classList.remove("border");
        accessories_newArrival.classList.remove("border");
        shoes_newArrival.classList.add("border");
    }
});
accessories_newArrival.addEventListener("click", function(e) {
    e.preventDefault();
    if (accessories_section_cards.hasClass("cards_visibility")) {
        accessories_section_cards.classList.remove("cards_visibility");
        all_section_cards.classList.add("cards_visibility");
        clothing_section_cards.classList.add("cards_visibility");
        shoes_boats_cards.classList.add("cards_visibility");
        all_newArrival.classList.remove("border");
        cloth_newArrival.classList.remove("border");
        shoes_newArrival.classList.remove("border");
        accessories_newArrival.classList.add("border");
    }
});