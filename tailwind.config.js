/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "./pages/**/*.{html,js}", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#06b6d4",
                dark: "#0f172a",
                secondary: "#64748b",
            },
            screens: {
                // "2xl": "1320px",
                // vts : "400px",
                // ts : "428px",
                // vxs : "448px",
                // xs : "512px",
            },
            maxHeight: {
                128: "30rem",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/line-clamp"),
        require("tw-elements/dist/plugin"),
    ],
};
