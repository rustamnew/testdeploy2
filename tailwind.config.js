/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                'xxs': '0.8125rem',
                '3.5': '3.5rem',
                '3.5xl': '2rem'
            },
            maxWidth: {
                'card': '29.75rem',
            },
            colors: {
                custom: {
                    lightblue: "#5A8CF1",
                    lightblue2: "#E6EDFF",
                    blue: "#316FEE",
                    lightgray: "#999999",
                    gray: "#666666",
                    graybg: "#F5F5F8",
                    white: "#ffffff"
                }
            },
            borderRadius: {
                100: '100px'
            }
            
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

