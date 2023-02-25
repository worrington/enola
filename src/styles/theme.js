import { createTheme } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
	palette : {
		primary : {
			main  : "#f15e22",
			light : "#ff8f50",
			dark  : "#b72b00",
			contrastText: '#fff',
		},
		secondary : {
			main  : "#fbb217",
			light : "#ffe454",
			dark  : "#c38300",
		},
		background : {
			paper   : "white",
			default : "#f3f3f3",
		},
	},
	typography : {
		fontFamily        : "'Roboto', sans-serif",
		fontSize          : 14,
		htmlFontSize      : 16,
		fontWeightLight   : 300,
		fontWeightRegular : 400,
		fontWeightMedium  : 500,
		fontWeightBold    : 700,
		h1                : { fontSize : "1.5rem" },
		h2                : {
			fontSize   : "1.25rem",
			fontWeight : 500,
		},
		subtitle1 : { fontSize : "0.75rem" },
		subtitle2 : {
			fontSize   : "1.125rem",
			fontWeight : 500,
		},
	},
});

export default theme;
