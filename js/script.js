// Navbar
const navbarToggle = document.querySelector("#navbar-toggle");
const navbarList = document.querySelector(".navbar-list");

navbarToggle.addEventListener("click", function () {
  navbarList.classList.toggle("active");
});
document.addEventListener("click", function (e) {
  if (!navbarToggle.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
    $("#navbar-toggle").prop("checked", false);
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    "@0.30": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@0.95": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.20": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.70": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Inti Swiper
const intiToggle = document.querySelector("#inti-btn");
const intiList = document.querySelector(".inti-swiper");
const tikToggle = document.querySelector("#tik-btn");
const tikList = document.querySelector(".tik-swiper");
const agamaToggle = document.querySelector("#agama-btn");
const agamaList = document.querySelector(".agama-swiper");
const bahasaToggle = document.querySelector("#bahasa-btn");
const bahasaList = document.querySelector(".bahasa-swiper");
const seniToggle = document.querySelector("#seni-btn");
const seniList = document.querySelector(".seni-swiper");
const olahragaToggle = document.querySelector("#olahraga-btn");
const olahragaList = document.querySelector(".olahraga-swiper");
const kwuToggle = document.querySelector("#kwu-btn");
const kwuList = document.querySelector(".kwu-swiper");
const negaraToggle = document.querySelector("#negara-btn");
const negaraList = document.querySelector(".negara-swiper");
const uksToggle = document.querySelector("#uks-btn");
const uksList = document.querySelector(".uks-swiper");

intiToggle.addEventListener("click", function () {
  intiList.classList.toggle("pengurus-active");
});
tikToggle.addEventListener("click", function () {
  tikList.classList.toggle("pengurus-active");
});
agamaToggle.addEventListener("click", function () {
  agamaList.classList.toggle("pengurus-active");
});
bahasaToggle.addEventListener("click", function () {
  bahasaList.classList.toggle("pengurus-active");
});
seniToggle.addEventListener("click", function () {
  seniList.classList.toggle("pengurus-active");
});
olahragaToggle.addEventListener("click", function () {
  olahragaList.classList.toggle("pengurus-active");
});
kwuToggle.addEventListener("click", function () {
  kwuList.classList.toggle("pengurus-active");
});
negaraToggle.addEventListener("click", function () {
  negaraList.classList.toggle("pengurus-active");
});
uksToggle.addEventListener("click", function () {
  uksList.classList.toggle("pengurus-active");
});
