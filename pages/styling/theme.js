import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

// Create a theme instance.
const themeBase = createMuiTheme({
    palette: {
        primary: {
            main: "#FF0000",
            light: "#6f9bae",
            dark: "#0e4253",
            contrastText: "#fff"
        },
        secondary: {
            main: "#bbdcdd",
            light: "#eeffff",
            dark: "#8baaab",
            contrastText: "#333"
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
