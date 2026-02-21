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
        bg: {
          primary: '#0F1419',
          secondary: '#1C2128',
          tertiary: '#2D333B',
        },
        text: {
          primary: '#E6EDF3',
          secondary: '#8B949E',
        },
        accent: {
          blue: '#58A6FF',
          green: '#39D353',
          gold: '#F4C430',
        },
        cat: {
          arrays: '#4FC3F7',
          linkedlists: '#81C784',
          trees: '#FFB74D',
          sorting: '#F06292',
          heaps: '#CE93D8',
          graphs: '#4DB6AC',
          dp: '#FFF176',
          backtracking: '#FFCC80',
          strings: '#90CAF9',
          interview: '#EF9A9A',
          math: '#B39DDB',
        }
      },
      height: {
        'screen-dynamic': '100dvh',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      }
    },
  },
  plugins: [],
};
export default config;
