import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import {Close} from "@material-ui/icons";
// core components
import {Dialog, DialogContent, DialogTitle, Fade, IconButton, Toolbar} from "@material-ui/core";
import RegularButton from "./Button";
import Typography from "@material-ui/core/Typography";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import {container} from "../styling/globalStyling";

const useStyles = makeStyles((theme) => ({
    ...container,
    appBar: {
        position: "relative",
        background: "linear-gradient(#00F3FF, #2E0259)",
        color: theme.palette.primary.contrastText
    },
    title:{
        flex: 1,
        fontWeight: "700",
        textAlign: "center",
    },
    buttonText:{
        margin:"auto",
    },
    navText: {
        fontWeight: "700",
        color: theme.palette.primary.contrastText
    },
    dialogContent: {
        backgroundColor: "#2E0259"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

export default function ShowResumeDialog(props) {
    const classes = useStyles();
    const { buttonText } = props;
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <GridContainer>
                <GridItem md={12}>
                    <RegularButton
                        aria-label={"show resume"}
                        className={classNames(classes.navLink)}
                        id={"resume"}
                        onClick={handleToggle}
                    >
                        <div className={classes.buttonText}>
                            <Typography variant={"body1"} className={classes.navText}>{buttonText}</Typography>
                        </div>
                    </RegularButton>
                </GridItem>
            </GridContainer>

            <Dialog fullScreen open={open} onBackdropClick={handleClose} TransitionComponent={Transition}>
                <DialogTitle className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color={"secondary"} onClick={handleClose} aria-label="close">
                            <Close />
                            <Typography variant={"body2"} className={classes.navText}>Close Resume</Typography>
                        </IconButton>
                    </Toolbar>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <iframe src={"/assets/Justin_Elias_Resume.pdf"} width={"100%"} height={"800"}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}
