module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				main_btn: {
					bg: "#7854f7",
					hover: "",
				},
				eshop_blue: {
					light: "rgb(91, 165, 250)",
					DEFAULT: "#272d4e",
					dark: "#062f6e",
				},
				greenLink: "var(--green-color)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
