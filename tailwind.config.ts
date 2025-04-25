import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin'


const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#fdf8f6',
					100: '#f5f5f5',
					200: '#eeeeee',
					300: '#e0e0e0',
					400: '#bdbdbd',
					500: '#9e9e9e',
					600: '#50505f',
					700: '#303034',
					800: '#13161c',
					900: '#0e0f13',
					950: '#020202',
				}
			},
			keyframes: {
				fadeIn: {
					'0%': {
						visibility: 'visible',
						opacity: '0',
					},
					'66%': {
						opacity: '100%',
					},
					'100%': {
						opacity: '100%',
					},
				},
				fadeOut: {
					'0%': {
						opacity: '100',
					},
					66: {
						opacity: '100%',
					},
					'100%': {
						opacity: '0%',
					},
				},
				slideUp: {
					'0%': {
						transform: 'translateY(25%)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
				slideDown: {
					'0%': {
						transform: 'translateY(0%)',
					},
					'100%': {
						transform: 'translateY(25%)',
					},
				},
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(50% 125% at 50% 100%, var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from var(--tw-conic-angle) at 50% 50%, var(--tw-gradient-stops))',
				'gradient-polka-dark': 'radial-gradient(#303034 0.5px, transparent 1px), radial-gradient(#303034 0.5px, transparent 0.5px)',
				'gradient-polka': 'radial-gradient(#bdbdbd 1px, transparent 1px), radial-gradient(#bdbdbd 0.5px, transparent 0.5px)',
			},
			fontFamily: {
				default: ['var(--font-inter)'],
				display: ['var(--font-display)'],
			},
			animation: {
				'slide-up-and-fade-in':
					'slideUp 1.3s cubic-bezier(.88,-0.01,.12,1), fadeIn 1.3s cubic-bezier(.88,-0.01,.12,1) forwards',
				'fade-in':
					'fadeIn 1.3s cubic-bezier(.88,-0.01,.12,1) forwards',
				'slide-down-and-fade-out':
						'slideDown 1.3s cubic-bezier(.88,-0.01,.12,1), fadeOut 1.3s cubic-bezier(.88,-0.01,.12,1) forwards',
			},
			transitionTimingFunction: {
				'in-out-expo': 'cubic-bezier(.88,-0.01,.12,1)',
				'in-expo': 'cubic-bezier(0,.77,.12,1)',
				'out-expo': 'cubic-bezier(.69,-0.01,.96,.49)',
			},
		},
	},
};
export default config;
