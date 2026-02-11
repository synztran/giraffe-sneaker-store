import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				accent: "#F59E0B",
				"brand-amber": "#FBBF24",
			},
			fontFamily: {
				sans: ["var(--font-montserrat)", "sans-serif"],
				display: ["var(--font-montserrat)", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
		base: true,
		styled: true,
		utils: true,
	},
};

export default config;
