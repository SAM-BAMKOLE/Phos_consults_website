const setNavOnload = () => {
    const segments = window.location.pathname.split("/");
    const toDelete = [];

    const allPages = [
        "index.html",
        "about.html",
        "services.html",
        "blog.html",
        "contact.html",
    ];
    let navActive = document.querySelector(".nav-active");
    navActive.classList.remove("nav-active");

    for (var i = 0; i < segments.length; i++) {
        if (segments[i].length < 1) {
            toDelete.push(i);
        }
    }
    for (var i = 0; i < toDelete.length; i++) {
        segments.splice(i, 1);
    }
    let filename = segments[segments.length - 1];

    if (document.getElementById(filename)) {
        document.getElementById(filename).classList.add("nav-active");
    }
};
document.addEventListener("DOMContentLoaded", setNavOnload);

// navbar
// animation for nav screen
const navDesktop = document.getElementById("nav-desktop");

document.addEventListener("DOMContentLoaded", (e) => {
    navDesktop.classList.remove("opacity-0");
});

// navbar for mobile
const menu = document.querySelector("#menu");
const navLinks = document.querySelector("#navbar-links");

let navState = false;

function changeNavState() {
    if (navState) {
        navLinks.classList.remove("-left-[100%]");
        navLinks.classList.add("left-0");
    } else {
        navLinks.classList.add("-left-[100%]");
        navLinks.classList.remove("left-0");
    }
}

menu.addEventListener("click", () => {
    navState = !navState;
    changeNavState();
});

// intersection for overview navbar scrolling

const header = document.querySelector("#header");

const navScrollCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        navDesktop.classList.add("bg-transparent");
        navDesktop.classList.remove("bg-gray-950");
    } else {
        navDesktop.classList.remove("bg-transparent");
        navDesktop.classList.add("bg-gray-950");
    }
};

const navScrollOptions = {
    root: null,
    rootMargin: "-100px 0px 0px 0px",
    threshold: 0.7,
};

const navScrollObserver = new IntersectionObserver(
    navScrollCallback,
    navScrollOptions
);
navScrollObserver.observe(header);

// navbar

// testimonial slider section
/*
const testimonialSlider = document.getElementById("testimonial-images");
const allText = document.querySelectorAll(".testimonial-text");

testimonialSlider.addEventListener("click", (e) => {
    let currentText = document.querySelector(".current-testimonial-text");
    let image = document.querySelector(".current-testimonial");
    if (e.target.dataset.id) {
        image.classList.remove("current-testimonial");
        e.target.parentElement.classList.add("current-testimonial");
        currentText.classList.remove("current-testimonial-text");
        allText[e.target.dataset.id].classList.add("current-testimonial-text");
    }
});
*/
// testimonial slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

// testimonial slider section ends

// slider code
const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");

let currentSlide = 1;

// image slider and manual naigation
let manualAction = (manual) => {
    slides.forEach((slide) => {
        slide.classList.remove("active");

        btns.forEach((btn) => {
            btn.classList.remove("activebtn");
        });

        slides[manual].classList.add("active");
        btns[manual].classList.add("activebtn");
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        manualAction(i);
        currentSlide = i;
    });
});

setInterval(() => {
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    manualAction(currentSlide);
    currentSlide++;
}, 15000);

// slider code ends

// footer copyright year
const copyYear = document.getElementById("year");

const currDate = new Date();
const currentYear = currDate.getFullYear();

copyYear.textContent = currentYear;
