/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-overlay":
                    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                testimonial:
                    " linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url('/images/testimonial-background.jpg')",
                "slider-one":
                    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-1.jpg')",
                "slider-two":
                    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-2.jpg')",
                "slider-three":
                    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-3.jpg')",
                "slider-four":
                    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-4.jpg')",
            },
            fontFamily: {
                raleway: [' "Raleway", sans-serif; '],
            },
            colors: {
                phosOrange: "#d65712",
                phosBlue: "#09067c",
            },
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
            pbase: "15px",
        },
    },
    plugins: [require("flowbite/plugin")],
};
