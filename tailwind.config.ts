import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },
        neutral: {
          "light-grey": "hsl(217, 12%, 63%)",
          "medium-grey": "hsl(216, 12%, 54%)",
          "dark-blue": "hsl(213, 19%, 18%)",
          "very-dark-blue": "hsl(216, 12%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
