import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {container} from "../styling/globalStyling";
import ShowResumeDialog from "./ShowResumeDialog";

const styles = () => ({
    container: {
        ...container,
        backgroundColor: "rgba(116, 116, 116, 0.5)" ,
        elevation: 1,
        marginBottom: "1rem",
        width: "80vw",
    },
});
const useStyles = makeStyles(styles);


export default function UserTable() {
    const classes = useStyles();

    return (
        <Container component={Paper} className={classes.container}>
            <Typography variant={"h1"} align={"center"}>Users</Typography>
            <Typography variant={"h4"} component={"h2"} align={"center"}>By: Justin Elias</Typography>
            <Typography align={"center"} ><a href={"mailto:justin.elias@pm.me"}>justin.elias@pm.me</a></Typography>
            <Typography align={"center"}><a href={"tel:7607168374"}>(760) 716-8374</a></Typography>
            <ShowResumeDialog buttonText={"See My Resume"}/>
        </Container>
    )
};
