import React from "react";
import {List, ListItem, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Link from "next/link";
import {container} from "../styling/globalStyling";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    block: {
        color: "inherit",
            padding: "0.9375rem",
            fontWeight: "500",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            textDecoration: "none",
            position: "relative",
            display: "block"
    },
    left: {
        float: "left!important",
            display: "block"
    },
    right: {
        position:"absolute",
        bottom: "0",
        right:"1rem",
            [theme.breakpoints.up("md")]: {
            float: "right!important",
        },

        [theme.breakpoints.down("sm")]: {
            float: "center!important"
        }
    },
    footer: {
        padding: "0.9375rem 0",
            textAlign: "center",
            display: "flex",
            zIndex: "2",
            position: "relative"
    },
    a: {
        color: theme.palette.primary,
            textDecoration: "none",
            backgroundColor: "transparent"
    },
    footerWhiteFont: {
        "&,&:hover,&:focus": {
            color: "#FFFFFF"
        }
    },
    container: {
        ...container,
        backgroundColor: "#C4E0F5",
        position: "relative",
        width: "80vw",
        list: {
            marginBottom: "0",
            padding: "0",
            marginTop: "0"
        }
    },
    inlineBlock: {
        display: "inline-block",
            padding: "0px",
            width: "auto"
    },
}));

export default function FooterContent() {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer} role={"contentinfo"}>
                <Container className={classes.container} component={Paper}>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <Link href={"/resume"}>
                                    <a
                                        className={classes.block}
                                    >
                                        Justin's Resume
                                    </a>
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.right}>
                        &copy; {1900 + new Date().getYear()} Justin Elias
                    </div>
                </Container>
            </footer>
        </div>
    );
}
