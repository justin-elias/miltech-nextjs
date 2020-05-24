import theme from "./theme";
import grey from "@material-ui/core/colors/grey";

const primaryColor = theme.palette.primary.contrastText;
const secondaryColor = theme.palette.secondary.main;

const buttonStyle = {
    button: {
        minHeight: "auto",
        minWidth: "auto",
        background: 'linear-gradient(#00F3FF, #2E0259)',
        color: primaryColor,
        boxShadow:
            "0 2px 2px 0 rgba(65, 110, 128, 0.28), 0 3px 1px -2px rgba(65, 110, 128, 0.28), 0 1px 5px 0 rgba(65, 110, 128, 0.28)",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            backgroundColor: grey,
            boxShadow:
                "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            display: "inline-block",
            top: "0",
            fontSize: "1.1rem",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "& svg": {
            position: "relative",
            display: "inline-block",
            top: "0",
            width: "18px",
            height: "18px",
            marginRight: "4px",
            verticalAlign: "middle"
        },
    },
    fullWidth: {
        width: "100%"
    },
    primary: {
        backgroundColor: primaryColor,
        boxShadow:
            "0 2px 2px 0 rgba(65, 110, 128, 0.14), 0 3px 1px -2px rgba(65, 110, 128, 0.2), 0 1px 5px 0 rgba(65, 110, 128, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: primaryColor,
            boxShadow:
                "0 14px 26px -12px rgba(65, 110, 128, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(65, 110, 128, 0.2)"
        }
    },
    secondary: {
        backgroundColor: secondaryColor,
        boxShadow:
            "0 2px 2px 0 rgba(65, 110, 128, 0.14), 0 3px 1px -2px rgba(65, 110, 128, 0.2), 0 1px 5px 0 rgba(65, 110, 128, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: secondaryColor,
            boxShadow:
                "0 14px 26px -12px rgba(65, 110, 128, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(65, 110, 128, 0.2)"
        }
    },
    simple: {
        "&,&:focus,&:hover,&:visited": {
            color: "#FFFFFF",
            background: "transparent",
            boxShadow: "none"
        },
        "&$primary": {
            "&,&:focus,&:hover,&:visited": {
                color: primaryColor
            }
        }
    },
    transparent: {
        "&,&:focus,&:hover,&:visited": {
            color: "inherit",
            background: "transparent",
            boxShadow: "none"
        }
    },
    disabled: {
        opacity: "0.65",
        pointerEvents: "none"
    },
    lg: {
        padding: "1.125rem 2.25rem",
        fontSize: "0.875rem",
        lineHeight: "1.333333",
        borderRadius: "0.2rem"
    },
    sm: {
        padding: "0.40625rem 1.25rem",
        fontSize: "0.6875rem",
        lineHeight: "1.5",
        borderRadius: "0.2rem"
    },
    round: {
        borderRadius: "30px"
    },
    block: {
        width: "100% !important"
    },
    link: {
        "&,&:hover,&:focus": {
            backgroundColor: "#fff",
            color: "#999999",
            boxShadow: "none"
        }
    },
    justIcon: {
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "20px",
        height: "41px",
        minWidth: "41px",
        width: "41px",
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
            marginRight: "0px"
        },
        "&$lg": {
            height: "57px",
            minWidth: "57px",
            width: "57px",
            lineHeight: "3.5rem",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "2rem",
                lineHeight: "3.5rem"
            },
            "& svg": {
                width: "32px",
                height: "32px"
            }
        },
        "&$sm": {
            height: "30px",
            minWidth: "30px",
            width: "30px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "17px",
                lineHeight: "1.813rem"
            },
            "& svg": {
                width: "17px",
                height: "17px"
            }
        }
    }
};

export default buttonStyle;
