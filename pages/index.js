import UserTable from "../src/components/UserTable";
import React from "react";
import FooterContent from "../src/components/FooterContent"
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/styles";
import {container} from "../src/styling/globalStyling";
import HeaderContent from "../src/components/HeaderContent";

const useStyles = makeStyles(() => ({
    container: {
        ...container,
        backgroundImage: "radial-gradient(circle farthest-side, #fff 50%, #2E0259 80%)"


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
