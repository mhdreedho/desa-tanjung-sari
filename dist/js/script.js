// // Navbar Fixed
// window.onscroll = function () {
//     const header = document.querySelector("header");
//     const fixedNav = header.offsetTop;

//     // const topBar = document.getElementById("topBar");

//     if (window.pageYOffset > fixedNav) {
//         header.classList.add("navbar-fixed");
//         // topBar.classList.add("hidden");
//     } else {
//         header.classList.remove("navbar-fixed");
//         // topBar.classList.remove("hidden");
//     }
// };

// Hamburger JS
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// remove margin top when page scrolled
// const section = document.querySelector(".section-content");
// let scrollpos = window.scrollY;
// let scrollchanged = 0;

// window.addEventListener("scroll", function () {
//     scrollpos = window.scrollY;

//     if (scrollpos >= 250) {
//         if (scrollchanged == 0) {
//             section.classList.add("pt-20");
//             scrollchanged = 1;
//         }
//     } else {
//         section.classList.remove("pt-20");
//         scrollchanged = 0;
//     }
// });
