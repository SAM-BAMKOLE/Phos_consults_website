/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-overlay":
                    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
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
