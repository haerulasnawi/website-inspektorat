/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			animation:{
				'slideTop':'slideTop 0.5s linear both'
			},
			keyframes:{
				slideTop:{
					'0%':{
						transform:'translateY(+100px)'
					},
					'100%':{transform:'translateY(0px)'}
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
