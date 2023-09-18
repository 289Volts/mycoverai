/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				space: ['var(--font-space)']
			},
			backgroundColor: {
				accent: '#47BFA3',
				gray100: '#F2F4F7'
			},
			colors: {
				altGray: {
					100: '#F2F4F7',
					600: '#475467',
					800: '#1D2939'
				}
			}
		}
	},
	plugins: []
};
