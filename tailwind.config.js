/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue accent
        secondary: '#6B7280', // Gray accent
      },
    },
  },
  safelist: [
    'text-purple-600',
    'bg-purple-600',
    'hover:bg-purple-700',
    'text-pink-600',
    'bg-pink-600',
    'hover:bg-pink-700',
    'text-green-600',
    'bg-green-600',
    'hover:bg-green-700',
  ],
  plugins: [],
}

