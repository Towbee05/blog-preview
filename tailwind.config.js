/** @type {import('tailwindcss').Config} */
// console.log(defaultTheme);
module.exports = {
  eslint:{
    ignoreDuringBuild : true
  },
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "xxs" : {"min" : "0px", "max" : "400px"},
        "xs" : {"min" : "400px", "max" : "700px"},
      },
      colors:{
        "custom-yellow" : "#f4d04e",
        "custom-grey": "#808080",
        "custom-black" : "#121212"
      },
      width:{
        "100%" : "100%"
      },
      maxWidth:{
        85:"25rem"
      },
      boxShadow:{
        "3xl":"8px 8px 0 1px",
      }
    },
  },
  plugins: [
  ],
}

