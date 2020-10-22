import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    width: "75%",
    margin: "1.5rem auto",
    // minHeight: "20vh",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <section className={classes.about}>
      <Typography align="center" variant="h5" color="inherit" gutterBottom>
        MedStory is a platform where you can keep your personal or family's
        medical records.
      </Typography>
    </section>
  );
}

export default About;
