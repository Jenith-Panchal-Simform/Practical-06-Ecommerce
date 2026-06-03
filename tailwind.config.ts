import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#212121",
                secondary: "#D6CFC7",
                tertiary: "#F4F1EE",
            },
            fontFamily: {
                heading: ["Libre Caslon Text", "serif"],
                body: ["Hanken Grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;
