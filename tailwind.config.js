/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'riii-black': '#0A0A0A',
        'riii-gold': '#C9A84C',
        'riii-cream': '#F5E6C0',
        'riii-charcoal': '#1A1A1A',
        'riii-gray': '#888888',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif'],
        'ui': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

