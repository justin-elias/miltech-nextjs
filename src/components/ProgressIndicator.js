import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        elevation: "4",
        zIndex: "3",
        backgroundColor: theme.palette.secondary.main,
    },
    indicator: {
        marginLeft: "45%",
        color: "#2E0259"
    }
}));
export default function ProgressIndicator() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant={"h2"} component={"h6"} color={"textPrimary"}>Loading Data</Typography>
                <CircularProgress className={classes.indicator} color={"inherit"}/>
            </CardContent>
        </Card>
    )
}
