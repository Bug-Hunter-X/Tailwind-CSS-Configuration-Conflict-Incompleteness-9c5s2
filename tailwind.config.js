```javascript
// This is a Tailwind CSS configuration file.
/** @type {import('tailwindcss').Config} */
export default {
  content: ["\."./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#007bff', //Example Custom Color
      },
    },
  },
  plugins: [],
}
```