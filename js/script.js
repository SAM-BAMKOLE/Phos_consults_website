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

// intersection for overvieservicesw h2
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

// intersection for booking h2
const booking = document.querySelector("#booking");
const bookingH2 = document.querySelector("#booking-heading");
const bookingP = document.querySelector("#booking-paragraph");

const bookingCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        bookingH2.classList.remove("translate-y-5");
        bookingH2.classList.remove("opacity-0");
        bookingP.classList.remove("translate-y-5");
        bookingP.classList.remove("opacity-0");
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
