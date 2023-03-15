module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#FEF9F5',
        'black-900': '#231F20;',
      },

      fontFamily: {
        body: ['"Libre Franklin"'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
