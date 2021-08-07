module.exports = {
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                myPink: '#FFE8D6',
                myAsh: '#B7B7A4',
                myRust: '#DDBEA9',
                myBlack: '#101119',
                myGrey: '#353a47',
            },
            fontFamily: {
                default: ['Heebo', 'sans-serif'],
                header: ['Giaza', 'serif'],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
