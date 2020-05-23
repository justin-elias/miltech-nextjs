import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

// Create a theme instance.
const themeBase = createMuiTheme({
    palette: {
        primary: {
            main: "#C4E0F5",

        },
        secondary: {
            main: "#F5C5C4",
            dark: "#67119E"

        },
        error: {
            main: red.A400,
        },
        background: {
            paper: "#f5f5dc",
            default: "fff"
        },
    },
    typography: {
        fontFamily: ["Lato", "Helvetica", "Arial", "Lucida", "sans-serif"].join(","),
        h1: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h2: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h3: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h4: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h5: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h6: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
    }
});
const theme = responsiveFontSizes(themeBase);
export default theme;
