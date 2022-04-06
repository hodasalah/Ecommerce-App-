module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				section:
					"linear-gradient(180deg, rgba(236, 240, 253, 0) 0%, rgba(236, 240, 253, 0.53) 14.32%, #ECF0FD 45.83%, rgba(236, 240, 253, 0.43) 84.33%, rgba(236, 240, 253, 0) 100%)",
				banner: "url('/assets/images/bg-shape.png'),linear-gradient(180deg,#e5efff 0%,rgba(229, 239, 255, 0.262661) 83.7%,rgba(229, 239, 255, 0)100%)",
				testi: "url('/assets/images/testi.svg')",
			},
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
