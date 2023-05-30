// AOS
AOS.init({
    offset: 200,
    delay: 50,
    duration: 800,
    easing: "ease-in-out",
    once: true,
});
// AOS

// navbar
// animation for nav screen
const navDesktop = document.getElementById("nav-desktop");
const navMobile = document.getElementById("nav-mobile");

document.addEventListener("DOMContentLoaded", (e) => {
    navDesktop.classList.remove("opacity-0");
    navMobile.classList.remove("opacity-0");
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
}, 10000);

// slider code ends
