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
