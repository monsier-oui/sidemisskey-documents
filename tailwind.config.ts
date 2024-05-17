import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f9d90',
          light: '#5eddcb',
        },
        accent: '#e34241',
      },
      spacing: {
        'header-height': 'var(--header-height,0)',
      },
      fontFamily: {
        sans: [
          'YakuHanJP',
          'Noto Sans JP Variable',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      aria: {
        current: 'current',
      },
    },
  },
  plugins: [typography],
}

export default config
