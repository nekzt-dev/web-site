import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backRadialBorder: "#0F0F0F",
        backRadialCenter: "#0A0A0A",
        pinkPrincipal: "#D029C5",
        greenPrincipal: "#00F8C6",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      skew: {
        '30': '30deg',
      },
    },
  },
  plugins: [],
};
export default config;
