/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            colors: {
                'hover-color': '#303031',
                'bottom-menu': '#3e4042',
            },
        },
    },
};
