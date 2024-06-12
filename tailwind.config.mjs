/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/dist/*.js',],
	theme: {
		extend: {},
	},
	rippleui: {
		themes: [
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#573242",
					backgroundPrimary: "#1a1a1a",
				},
			},
		],
	},
	plugins: [
		require("rippleui"),
	],
}
