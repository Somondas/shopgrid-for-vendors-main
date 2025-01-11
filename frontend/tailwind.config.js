/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "Poppins-Light": ["Poppins-Light"],
        "Poppins-Regular": ["Poppins-Regular"],
        "Poppins-Medium": ["Poppins-Medium"],
        "Poppins-SemiBold": ["Poppins-SemiBold"],
        "Poppins-Bold": ["Poppins-Bold"],
      },
    },
  },
  plugins: [],
};
