function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-primary"),
        success: withOpacity("--color-success"),
        error: withOpacity("--color-error"),
        base: withOpacity("--color-base"),
        muted: withOpacity("--color-muted"),
        inverted: withOpacity("--color-inverted"),
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "on-fill": withOpacity("--color-on-fill"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
