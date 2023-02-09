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
                'body-color': '#242526',
                'bottom-menu': '#3e4042',
                'diviner': '#323233',
                'place-holder-color': '#3a3b3d',
                'close-modal':'#3a3b3c',
                'input-color': '#3a3b3c',
                'hover-nav-right': '#4E4F50',
                'status-online': '#31A24C',
                'background-color': '#1e1e1e',
            },
        },
    },
};
