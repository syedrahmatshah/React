/**
 * @format
 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#104A5F",
        secondary: "#F0F4EF33",
        lightGreen: "#F0F4EF",
        faColor: "#6FA2B5",
        placeholder: "#6FA2B5",
        black: "#000000",
        bColor: "#E0E0E0",
        mbColor: "#E5E7EB",
        mtextColor: "#333333",
        searchColor: " #9CA3AF",
        inputBorder: "#BDBDBD",
        red: "#E95656",
        selectPlace: "#969696",
        warning: " #E6B6B6",
        tIconColor: "#477484",
        descriptionText: "#575757",
        grayBorder: "#CACED0",
        blue: "#025EEA",
        darkGray: "#4F4F4F",
        error: "#BC2828",
        checkboxLabel: "#111827",
        green: "#0BB645",
        darkRed: "#DD2025",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        satoshi: ["CustomFont"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans - serif"],
      },
      boxShadow: {
        "custom-shadow": "0px 0px 24.7px 0px #072B398A",
        "button-shadow": "0px 0px 19.1px 0px #072B39",
      },
      backdropBlur: {
        mBlur: "10px",
      },
    },
  },
  plugins: [],
};
