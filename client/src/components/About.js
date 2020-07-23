import React from "react";
import { Typography } from "@material-ui/core";

function About() {
  return (
    <section style={{ width: "75%", margin: "1.5rem auto" }}>
      <Typography align="center" variant="h5" color="inherit" gutterBottom>
        MedStory is a platform where you can keep your personal or family's
        medical records.
      </Typography>
    </section>
  );
}

export default About;
