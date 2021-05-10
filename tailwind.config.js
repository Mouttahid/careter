module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                body: ['Nunito']
            },
            colors: {
                primary: "#5C96C9",
                secondary: {
                    DEFAULT: "#D66752",
                    '50': '#fdf7f6',
                    '100': '#fbf0ee',
                    '200': '#f5d9d4',
                    '300': '#efc2ba',
                    '400': '#e29586',
                    '500': '#d66752',
                    '600': '#c15d4a',
                    '700': '#a14d3e',
                    '800': '#803e31',
                    '900': '#693228'
                }

            }
        }

    },
    variants: {
        extend: {}
    },
    plugins: [],
    important: true
}
