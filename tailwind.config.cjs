/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			animation: {
				slideTop: 'slideTop 0.8s linear both'
			},
			keyframes: {
				slideTop: {
					'0%': {
						transform: 'translateY(0)'
					},
					to: { transform: 'translateY(-100px)' }
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
