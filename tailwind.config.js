/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
	  fontFamily: {
		  "body": ["Nunito"],
		  "title": ["Bitter"]
	  },
	  extend: {
		// colors: {
		// 	primary: "#563a6e", 	// Dark purple
		// 	secondary: "#6e4a8c", 	// Purple
		// 	accent: "#E8C792",		// Biege
		// 	button: "#3e2a4f",		// Very Dark Purple
		// 	select: "#AC76DE",		// Light Purple
		// 	start: "#dcbbfe", 		// Purplish White
		// 	end: "#e7d0ff"			// Purplish-er White
		// }
		colors: {
			primary: "#292929",		// Dark Gray
			secondary: "#3D3D3D",	// Gray
			accent: "#FFFFFF",		// White
			button: "#000000",		// Black
			select: "#474747",		// Light Gray
			start: "#CCCCCC", 		// Grayish White
			end: "#ADADAD"			// Grayish-er White
		}
		// colors: {
		// 	primary: "#000052",		// Dark Blue
		// 	secondary: "#0000FF",	// Blue
		// 	accent: "#FFD100",		// Yellow
		// 	button: "#00002B",		// Very Dark Blue
		// 	select: "#87CEEB",		// Light Blue
		// 	start: "#ECEFFF", 		// Blueish White
		// 	end: "#E4EFFF"			// Blueish-er White
		// }
	  },
	},
	plugins: [],
  }
  