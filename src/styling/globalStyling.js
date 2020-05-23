import theme from "./theme";

const containerFluid = {
    paddingRight: "0.938em",
    paddingLeft: "0.938em",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
const container = {
    ...containerFluid,
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100vw"
    },
    [theme.breakpoints.only("md")]: {
        maxWidth: "100vw"
    },
    [theme.breakpoints.only("lg")]: {
        maxWidth: "100vw"
    },
    [theme.breakpoints.only("xl")]: {
        maxWidth: "87.5em"
    }
};

export {
    container,
}
