module.exports = {
  content: ["./index.html","./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: {
          50: '#f6fbff',
          100: '#eaf6ff',
          300: '#7FD3F3',
          500: '#0EA5E9',
          700: '#0B74A8'
        },
        accent: '#FF6B6B'
      }
    }
  },
  plugins: []
}
