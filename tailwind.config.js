const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: 'class',
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            maxWidth: {
                'screen-3xl': '1920px', // Ajusta este valor si necesitas otro tamaño
            },
            fontFamily: {
                'sans': ['TeXGyreHeros'],
                'body': ['TeXGyreHeros'],
                'condensed': ['TeXGyreHerosCondensed'],
            },
        },
    },
    plugins: [],
};
