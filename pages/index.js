import UserTable from "./components/UserTable";
import React from "react";
import FooterContent from "./components/FooterContent"
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/styles";
import {container} from "./styling/globalStyling";
import HeaderContent from "./components/HeaderContent";

const useStyles = makeStyles(() => ({
    container: {
        ...container,

    }
}));

export default function Index() {
    const classes = useStyles();
  return (
      <Container className={classes.container}>
          <HeaderContent/>
          <main>
              <UserTable/>
          </main>
          <FooterContent/>
      </Container>


  )
}
