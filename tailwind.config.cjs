/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"dark-blue": "#2b3945",
			"very-dark-blue": "	#202c37",
			"very-light-blue": "#111517",
			"dark-gray": "#858585",
			"very-light-gray": "#fafafa",
			white: "#ffffff",
		},
		extend: {
			boxShadow: {
				header: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
				select: "0px 2px 9px rgba(0, 0, 0, 0.0562443)",
				input: "0px 2px 9px rgba(0, 0, 0, 0.0562443)",
				card: "0px 2px 7px rgba(0, 0, 0, 0.0562443)",
				button: "0px 0px 7px rgba(0,0,0, 0.239139)",
				label: "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)",
			},
		},
	},
	plugins: [],
}
