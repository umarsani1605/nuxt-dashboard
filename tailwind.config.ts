import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import scrollbar from 'tailwind-scrollbar'
import tailwindcssAnimate from 'tailwindcss-animate'

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#eff7ff',
          '100': '#dfeeff',
          '200': '#b8dfff',
          '300': '#78c6ff',
          '400': '#2ca7ff',
          '500': '#068ef1',
          '600': '#006fce',
          '700': '#0059a7',
          '800': '#024b8a',
          '900': '#083f72',
          '950': '#06274b',
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    }
  },
  plugins: [
    tailwindcssAnimate, 
    scrollbar({noncompatible: true})]
}