/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#d35c6a", // Terracotta
          light: "#ffa6b1",   // Soft accent
          dark: "#a64450",    // Darker shade for hover
        },
        sand: {
          light: "#f9f7f5", // Very light off-white
          DEFAULT: "#f0e6e0", // Base beige
          dark: "#e0d6d0",    // Darker beige
        },
        gold: {
          DEFAULT: "#C5A065", // Bronze/Gold accent
        },
        charcoal: "#1a1a1a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
