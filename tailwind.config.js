/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Lato": ["Lato", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"]
      },
      screens: {
        "Small_Tablet_Devices_Size_View": {"max": "639px", "min": "426px"},
        "Large_Mobile_Devices_Size_View": {"max": "426px", "min": "376px"},
        "Medium_Mobile_Devices_Size_View": {"max": "376px", "min": "321px"},
        "Small_Mobile_Devices_Size_View": {"max": "321px"}
      }
    },
  },
  plugins: [],
}

/*

Note:
This is a customizable configuration path where you can adjust various elements such as colors, fonts, screen sizes, and much more. You can also use it to add arbitrary values to HTML elements.

*/
