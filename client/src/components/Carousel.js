import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import img1 from "../image/med2.jpg";
import img2 from "../image/med7.jpg";
import img3 from "../image/med8.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black"
    // backgroundColor: "white"
  },
  media: {
    overflow: "hidden"
  }
}));

export default props => {
  const items = [
    {
      image: img1,
      name: "Random Name #1",
      description: "Create your Medical History database."
    },
    {
      image: img2,
      name: "Random Name #2",
      description: "Keep track of your drug records."
    },
    {
      image: img3,
      name: "Random Name #2",
      description:
        "Keep all your medical records and prescriptions a click away!"
    }
  ];

  return (
    <Carousel interval="3500" autoplay="true">
      {items.map(item => {
        return <Item key={item.name} item={item} />;
      })}
    </Carousel>
  );
};

function Item(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={props.item.image}
        title={props.item.name}
        height="450"
        width="240"
      />
      <div className={classes.overlay}>
        <h1>{props.item.description}</h1>
      </div>
    </Card>
  );
}
