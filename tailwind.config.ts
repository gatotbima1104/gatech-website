import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        mono: ['"Geist Mono"', 'monospace'],
        serif: ['"Libre Baskerville"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('/background.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
