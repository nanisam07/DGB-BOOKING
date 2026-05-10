/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#E8365D',
          light: '#ffeef3',
          muted: '#f9c9d6',
        },
        ink: {
          DEFAULT: '#1a1a2e',
          soft: '#4a4a6a',
          muted: '#9898b0',
        },
        surface: {
          DEFAULT: '#ffffff',
          2: '#f7f7fb',
          3: '#f0f0f8',
        },
        green: {
          DEFAULT: '#1DAA6B',
          light: '#e8f8f1',
        },
        amber: {
          DEFAULT: '#F59B00',
          light: '#fff8ec',
        },
        blue: {
          DEFAULT: '#1A73E8',
          light: '#e8f1fd',
        },
      },
      fontFamily: {
        sans: ['DMSans_400Regular'],
        'sans-medium': ['DMSans_500Medium'],
        'sans-semibold': ['DMSans_600SemiBold'],
        serif: ['PlayfairDisplay_600SemiBold'],
        'serif-italic': ['PlayfairDisplay_500Medium_Italic'],
      },
    },
  },
  plugins: [],
};
