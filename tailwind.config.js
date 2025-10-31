/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        neutral: {
          200: '#e5e7eb',
          300: '#d1d5db',
          600: '#4b5563',
        },
      },
    },
  },
  plugins: [],
}
