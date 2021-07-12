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
                myPink: '#ecd8d2',
                myMint: '#c4cec6',
                myBrown: '#c4ac9e',
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
