/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.html",
        "./about.html",
        "./index.html",
        "./js/app.js",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            backgroundImage: {
                testimonial:
                    " linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url('/images/testimonial-background.jpg')",
                addressHero:
                    " linear-gradient(rgba(0, 0, 0, 0.75), rgba(3, 7, 18, 0.75))",
                pattern:
                    " linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), url('/images/pattern-2.jpg')",
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
