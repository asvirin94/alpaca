import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#828282',
  			},
  			light: {
  				'100': '#FDFBFA',
  				DEFAULT: '#EBE9E7'
  			},
  			green: {
  				DEFAULT: '#87C490'
  			},
  		},
  		screens: {
			xxs: '340px',
			xs: '540px',
  			sm: '640px',
  		},
  	}
  },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
