/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
  colors: {
    text: "hsl(38, 44%, 7%)",
    background: "hsl(38, 50%, 97%)",
    primary: "hsl(36, 100%, 50%)",
    secondary: "hsl(36, 86%, 70%)",
    accent: "hsl(36, 57%, 64%)",
    "dark-text": "hsl(37, 44%, 93%)",
    "dark-background": "hsl(43, 47%, 3%)",
    "dark-secondary": "hsl(36, 86%, 30%)",
    "dark-accent": "hsl(36, 57%, 36%)",
  },
  
    extend: {
      fontSize: {
        sm: "0.600rem",
        base: "0.8rem",
        xl: "1.066rem",
        "2xl": "1.421rem",
        "3xl": "1.894rem",
        "4xl": "2.525rem",
        "5xl": "3.366rem",
      },
      fontFamily: {
        heading: "Inter",
        body: "Inter",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
