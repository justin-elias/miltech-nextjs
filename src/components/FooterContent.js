import React from "react";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {container} from "../styling/globalStyling";
import Container from "@material-ui/core/Container";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    text: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff"
    },
    footer: {
        padding: "0.9375rem 0",
            textAlign: "center",
            display: "flex",
            zIndex: "2",
            position: "relative"
    },
    container: {
        ...container,
        backgroundColor:"rgba(116, 116, 116, 0.6)",
        position: "relative",
        width: "80vw",
        height: "10vw",
        list: {
            marginBottom: "0",
            padding: "0",
            marginTop: "0"
        }
    },
}));

export default function FooterContent() {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer} role={"contentinfo"}>
                <Container className={classes.container} component={Paper}>
                    <div className={classes.text}>
                        &copy; {1900 + new Date().getYear()} Justin Elias
                    </div>
                </Container>
            </footer>
        </div>
    );
}
