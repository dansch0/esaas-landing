import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(at top,#F0F3F7,#F0F3F7,#ffffff,#ffffff)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "img-database": "url('/images/database.png')",
        "img-clientes": "url('/images/clientes.png')",
        "img-erp": "url('/images/erp.png')",
      },
      colors: {
        'main-primary-500': '#0A76BF',
        'main-primary-600': '#0a5d96',
        'main-secondary-800': '#233440',
      },
      boxShadow:{
        'card': '0 0 20px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
};
export default config;
