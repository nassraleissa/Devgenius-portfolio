/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/Team.tsx',
    './app/components/Projects.tsx',
    './app/components/Features.tsx',
    './app/components/Hero.tsx',
    './app/components/Navbar.tsx',
    './app/components/CTA.tsx',
    './app/components/Testimonials.tsx',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        'sans': ['var(--font-tajawal)', 'Tajawal', 'sans-serif'],
        'arabic': ['var(--font-tajawal)', 'Tajawal', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        '6xl': '72rem',
      },
      screens: {
        'md': '768px',
        'lg': '1024px',
      },
      spacing: {
        '4': '1rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require("tailwindcss-animate")
  ],
  variants: {
    extend: {
      textAlign: ['rtl'],
      flexDirection: ['rtl'],
    },
  },
}
