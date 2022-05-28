import { createTheme } from "@material-ui/core/styles";

const porroBlue = "#0b72b9";
const porroOrange = "#ffba60";

const theme = createTheme({
	palette: {
		common: {
			blue: `${porroBlue}`,
			orange: `${porroOrange}`,
		},
		primary: {
			main: `${porroBlue}`,
		},
		secondary: {
			main: `${porroOrange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: "700",
			fontSize: "1rem",
			minWidth: "8rem",
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "#fff",
		},
	},
});

export default theme;
