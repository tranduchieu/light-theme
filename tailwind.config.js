module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('autoprefixer')],
};
