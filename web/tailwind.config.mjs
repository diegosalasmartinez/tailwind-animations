import animations from '../src/index.js'
import theme from '../src/theme.js'

const { animation } = theme
const safelist = Object.keys(animation).map(key => `animate-${key}`)

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)'
      },
      backgroundSize: {
        degraded: '14px 24px'
      },
      boxShadow: {
        'toggle-theme': '0 3px 10px rgb(0,0,0,0.2)'
      }
    }
  },
  plugins: [animations],
  safelist
}
