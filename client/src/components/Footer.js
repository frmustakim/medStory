import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit">
      {"Copyright © "}
      <Link color="inherit" href="">
        MedStory
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    // marginTop: "auto",
    // textAlign: "center",
    backgroundColor: "#212121",
    color: "white",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  const style = {
    margin: 0,
    top: "auto",
    right: "auto",
    bottom: 0,
    left: "auto",
    width: "100%",
    position: "fixed",
  };
  return (
    <div>
      <footer className={classes.footer} style={style}>
        <Container maxWidth="sm" align="center">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
