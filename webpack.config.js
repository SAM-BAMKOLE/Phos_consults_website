const path = require("path");

module.exports = {
    entry: "./node_modules/aos/src/js/aos.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "/js"),
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    mode: "development",
};
