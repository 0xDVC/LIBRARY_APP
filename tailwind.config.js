module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                regular: ['SF-Pro-Regular', 'sans-serif'],
                medium: ['SF-Pro-Italic', 'sans-serif'],
            }
        },
    },
    plugins: [],
}