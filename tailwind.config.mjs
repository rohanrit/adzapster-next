/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "primary-container": "var(--primary)",
        "on-primary": "var(--icon-color)",
        "on-primary-container": "var(--icon-color)",
        secondary: "var(--accent-purple)",
        "secondary-container": "var(--accent-purple)",
        "on-secondary-container": "var(--icon-color)",
        tertiary: "var(--text-muted)",
        background: "var(--bg-primary)",
        "on-background": "var(--text-dark)",
        "surface-container-low": "var(--bg-secondary)",
        "surface-container": "var(--bg-card)",
        "surface-container-high": "var(--bg-secondary)",
        "outline-variant": "var(--border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        gutter: "24px",
        base: "16px",
        md: "24px",
        lg: "40px",
        xl: "80px",
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};
