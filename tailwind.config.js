/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html","./Ex.html" // หรือ "./index.html" สำหรับไฟล์เดียว
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
