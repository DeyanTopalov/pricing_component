/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue});`;
    }
    return `hsla(var($variableName}))`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-gray-blue-200": withOpacity("--gray-blue-200"),
        "clr-gray-blue-400": withOpacity("--gray-blue-400"),
        "clr-gray-blue-600": withOpacity("--gray-blue-600"),
        "clr-gray-blue-800": withOpacity("--gray-blue-800"),
        "clr-gradient-start": withOpacity("--gradient-start"),
        "clr-gradient-end": withOpacity("--gradient-end"),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
