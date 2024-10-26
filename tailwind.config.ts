import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'collapse' : '915px',
        'max' : '2200px',
      },
      colors: {
        'darkBg' : '#222',
        'darkText' : '#F9F9F9'
      }
    },
  },
  plugins: [],
  mode: 'jit'
}

export default config