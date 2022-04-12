module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        'carbon-orange': '#FF6C11',
        'neon-red': '#FF3864',
        'electric-blue': '#2DE2E6',
        'dusk-purple': '#261447',
        'midnight-purple': '#0D0221'
      }
    },
  },
  plugins: [],
}
