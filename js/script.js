// animation for nav screen
const navDesktop = document.getElementById("nav-desktop");
const navMobile = document.getElementById("nav-mobile");

document.addEventListener("DOMContentLoaded", (e) => {
    navDesktop.classList.remove("opacity-0");
    navMobile.classList.remove("opacity-0");
});

// navbar for mobile
const menu = document.getElementById("menu-btn");
const nav = document.getElementById("navbar-sticky");

let navState = false;

function changeNavState() {
    if (navState) {
        nav.classList.remove("-left-[100%]");
    } else {
        nav.classList.add("-left-[100%]");
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

/* Carousel or slider section
=======================
=====================*/
const slides = document.querySelectorAll(".slider");

const auto = true;
const intervalTime = 10000;
let slidesInterval;

// next slide function
const nextSlide = () => {
    // Get current class
    const current = document.querySelector(".displayed");
    const currentContent = document.querySelector(".displayed .content");
    // remove current class
    current.classList.remove("displayed");
    // next element sibling for next slide
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("displayed");
        document
            .querySelector(".displayed .content")
            .classList.remove("no-content");
        document
            .querySelector(".displayed .content")
            .classList.add("current-content");
    } else {
        slides[0].classList.add("displayed");
    }

    setTimeout(() => current.classList.remove("current"));
};

document.addEventListener("DOMContentLoaded", () => {
    setInterval(nextSlide, intervalTime);
});

// previous slide function
/*
const previousSlide = ()=> {
    // Get current class
    const current = document.querySelector(".displayed");
    // remove current class
    current.classList.remove("displayed");
    // previous element sibling for previous slide
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("displayed");
    } else {
        slides[slides.length - 1].classList.add("displayed");
    }

    setTimeout(()=> current.classList.remove("current"))
}
*/
/* Carousel or slider section ends
=======================
=====================*/

// intersection observer sections

// intersection for overview h2
const overview = document.querySelector("#overview");
const overviewH2 = document.querySelector("#overview-heading");

const overviewCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        overviewH2.classList.remove("translate-y-5");
        overviewH2.classList.remove("opacity-0");
    }
};

const overviewOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.2,
};

const overviewObserver = new IntersectionObserver(
    overviewCallback,
    overviewOptions
);
overviewObserver.observe(overview);

// intersection for overview links
const links = document.querySelectorAll("#overview-links div");

const linksCallback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-10");
            entry.target.classList.remove("opacity-0");
        }
    });
};

const linksOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px",
};

const linksObserver = new IntersectionObserver(linksCallback, linksOptions);

document.querySelectorAll("#overview-links div").forEach((el) => {
    linksObserver.observe(el);
});

// intersection for about section left
const aboutSection = document.getElementById("about");
const aboutLeft = document.querySelector("#about-content-left");

const aboutLeftCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        aboutLeft.classList.remove("-translate-x-1/2");
        aboutLeft.classList.remove("opacity-0");
    }
};

const aboutLeftOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.5,
};

const aboutLeftObserver = new IntersectionObserver(
    aboutLeftCallback,
    aboutLeftOptions
);
aboutLeftObserver.observe(about);

// intersection for about section right
const aboutRight = document.querySelector("#about-content-right");

const aboutRightCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        aboutRight.classList.remove("translate-x-1/2");
        aboutRight.classList.remove("opacity-0");
    }
};

const aboutRightOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.3,
};

const aboutRightObserver = new IntersectionObserver(
    aboutRightCallback,
    aboutRightOptions
);
aboutRightObserver.observe(about);

// intersection for services h2
const services = document.querySelector("#services");
const servicesH2 = document.querySelector("#services-heading");
const servicesP = document.querySelector("#services-paragraph");

const servicesCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        servicesH2.classList.remove("translate-y-5");
        servicesH2.classList.remove("opacity-0");
        servicesP.classList.remove("translate-y-5");
        servicesP.classList.remove("opacity-0");
    }
};

const servicesOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.2,
};

const servicesObserver = new IntersectionObserver(
    servicesCallback,
    servicesOptions
);
servicesObserver.observe(services);

// intersection for services links
const serviceLinks = document.querySelectorAll("#services-links a");

const serviceLinksCallback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-10");
            entry.target.classList.remove("opacity-0");
        }
    });
};

const serviceLinksOptions = {
    root: null,
    threshold: 0.6,
    rootMargin: "0px",
};

const serviceLinksObserver = new IntersectionObserver(
    serviceLinksCallback,
    serviceLinksOptions
);

document.querySelectorAll("#services-links a").forEach((el) => {
    serviceLinksObserver.observe(el);
});

// intersection for services h2
const members = document.querySelector("#members");
const membersH2 = document.querySelector("#members-heading");
const membersP = document.querySelector("#members-paragraph");

const membersCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        membersH2.classList.remove("translate-y-5");
        membersH2.classList.remove("opacity-0");
        membersP.classList.remove("translate-y-5");
        membersP.classList.remove("opacity-0");
    }
};

const membersOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.2,
};

const membersObserver = new IntersectionObserver(
    membersCallback,
    membersOptions
);
membersObserver.observe(members);

// intersection for clients h2
const clients = document.querySelector("#clients");
const clientsH2 = document.querySelector("#clients-heading");
const clientsP = document.querySelector("#clients-paragraph");

const clientsCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        clientsH2.classList.remove("translate-y-5");
        clientsH2.classList.remove("opacity-0");
        clientsP.classList.remove("translate-y-5");
        clientsP.classList.remove("opacity-0");
    }
};

const clientsOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.2,
};

const clientsObserver = new IntersectionObserver(
    clientsCallback,
    clientsOptions
);
clientsObserver.observe(clients);

// intersection for clients links
const clientLinks = document.querySelectorAll("#clients-list div");

const clientLinksCallback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-10");
            entry.target.classList.remove("opacity-0");
        }
    });
};

const clientLinksOptions = {
    root: null,
    threshold: 0.6,
    rootMargin: "0px",
};

const clientLinksObserver = new IntersectionObserver(
    clientLinksCallback,
    clientLinksOptions
);

document.querySelectorAll("#clients-list div").forEach((el) => {
    clientLinksObserver.observe(el);
});

// intersection for testimonial h2
const testimonial = document.querySelector("#testimonial");
const testimonialH2 = document.querySelector("#testimonial-heading");
const testimonialP = document.querySelector("#testimonial-paragraph");

const testimonialCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        testimonialH2.classList.remove("translate-y-5");
        testimonialH2.classList.remove("opacity-0");
        testimonialP.classList.remove("translate-y-5");
        testimonialP.classList.remove("opacity-0");
    }
};

const testimonialOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.4,
};

const testimonialObserver = new IntersectionObserver(
    testimonialCallback,
    testimonialOptions
);
testimonialObserver.observe(testimonial);

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

// intersection for projects h2
const projects = document.querySelector("#projects");
const projectsH2 = document.querySelector("#projects-heading");
const projectsP = document.querySelector("#projects-paragraph");

const projectsCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        projectsH2.classList.remove("translate-y-5");
        projectsH2.classList.remove("opacity-0");
        projectsP.classList.remove("translate-y-5");
        projectsP.classList.remove("opacity-0");
    }
};

const projectsOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.2,
};

const projectsObserver = new IntersectionObserver(
    projectsCallback,
    projectsOptions
);
projectsObserver.observe(projects);

// intersection for projects links
const projectsLinks = document.querySelectorAll("#project-links div");

const projectsLinksCallback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-10");
            entry.target.classList.remove("opacity-0");
        }
    });
};

const projectsLinksOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
};

const projectsLinksObserver = new IntersectionObserver(
    projectsLinksCallback,
    projectsLinksOptions
);

projectsLinks.forEach((el) => {
    projectsLinksObserver.observe(el);
});

// intersection for articles h2
const articles = document.querySelector("#articles");
const articlesH2 = document.querySelector("#articles-heading");
const articlesP = document.querySelector("#articles-paragraph");

const articlesCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        articlesH2.classList.remove("translate-y-5");
        articlesH2.classList.remove("opacity-0");
        articlesP.classList.remove("translate-y-5");
        articlesP.classList.remove("opacity-0");
    }
};

const articlesOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.4,
};

const articlesObserver = new IntersectionObserver(
    articlesCallback,
    articlesOptions
);
articlesObserver.observe(articles);

// intersection for articles links
const articlesLinks = document.querySelectorAll("#articles-links a");

const articlesLinksCallback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-10");
            entry.target.classList.remove("opacity-0");
        }
    });
};

const articlesLinksOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
};

const articlesLinksObserver = new IntersectionObserver(
    articlesLinksCallback,
    articlesLinksOptions
);

articlesLinks.forEach((el) => {
    articlesLinksObserver.observe(el);
});

// intersection for booking h2
const booking = document.querySelector("#booking");
const bookingH2 = document.querySelector("#booking-heading");
const bookingP = document.querySelector("#booking-paragraph");
const form = document.getElementById("booking-form");

const bookingCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        bookingH2.classList.remove("translate-y-5");
        bookingH2.classList.remove("opacity-0");
        bookingP.classList.remove("translate-y-5");
        bookingP.classList.remove("opacity-0");
        form.classList.remove("translate-y-5");
        form.classList.remove("opacity-0");
    }
};

const bookingOptions = {
    root: null,
    // threshold: [0, 0.5],
    threshold: 0.4,
};

const bookingObserver = new IntersectionObserver(
    bookingCallback,
    bookingOptions
);
bookingObserver.observe(booking);
