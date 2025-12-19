/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f43f5e', // Rose 500
                    hover: '#e11d48',   // Rose 600
                },
                dark: {
                    bg: '#0f172a',      // Slate 900
                    card: '#1e293b',    // Slate 800
                },
                light: {
                    main: '#f8fafc',    // Slate 50
                    muted: '#94a3b8',   // Slate 400
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
