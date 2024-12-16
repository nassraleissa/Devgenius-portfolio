/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  mode: 'jit',
  safelist: [
    // Explicitly safelist classes that might be dynamically used
    'grid', 'md:grid-cols-3', 'gap-8', 
    'bg-gray-900', 'bg-gray-800', 
    'text-white', 'text-gray-400', 'text-gray-500',
    'px-4', 'py-16', 'md:py-24',
    'container', 'mx-auto', 'text-center',
    'max-w-6xl', 'text-3xl', 'md:text-4xl', 
    'font-bold', 'mb-12', 'relative', 'w-full', 
    'pt-[100%]', 'absolute', 'inset-0', 'object-cover',
    'p-6', 'text-right', 'text-xl', 'font-semibold', 'mb-2',
    'text-sm'
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    // Explicitly list all components
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
