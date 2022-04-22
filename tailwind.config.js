module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#112467',
        gray1: '#333333',
        gray2: '#666666',
        gray3: '#efefef'
      },
      fontSize: {
        header: ['2.5rem', '2.75rem'] // 40px 44px
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
