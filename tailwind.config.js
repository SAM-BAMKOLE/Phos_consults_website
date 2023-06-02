/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            backgroundImage: {
                testimonial:
                    " linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url('/images/testimonial-background.jpg')",
                addressHero:
                    " linear-gradient(rgba(0, 0, 0, 0.75), rgba(3, 7, 18, 0.75))",
            },
            fontFamily: {
                raleway: [' "Raleway", sans-serif; '],
            },
            colors: {
                phosOrange: "#ffa600",
                phosBlue: "#09067c",
            },
        },
        fontSize: {
            sm: "13px",
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
