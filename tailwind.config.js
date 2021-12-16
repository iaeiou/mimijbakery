module.exports = {
  content: ['layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'corinth': ['corinthia', 'cursive'],
        'slab': ['"roboto slab"', 'serif'],
        'bitter': ['bitter', 'serif']
      },
      animation: {
        slideInLeft: '1s ease-out 0s 1 slideInLeft',
      },
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-33%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
