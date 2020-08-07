import React, { useState, Fragment } from "react";
import {
  TextField,
  Input,
  InputLabel,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { v1 as uuid } from "uuid";

function Dashboard() {
  const style = {
    margin: 0,
    top: "auto",
    right: 25,
    bottom: 110,
    left: "auto",
    position: "fixed",
    color: "blue",
  };
  const [prescriptions, setPrescriptions] = useState([
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Chicken" },
    { id: uuid(), name: "Potato" },
  ]);

  const [state, setState] = useState({
    mainState: "initial",
    selectedFile: null,
    imageUploaded: 0,
  });
  const handleUploadClick = (event) => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setState({
        selectedFile: [reader.result],
      });
    };
    console.log(url); // Would see a path?

    setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };
  return (
    <>
      <h1>Dashboard</h1>
      {/* <TextField
        accept="image/*"
        type="file"
        id="image-input"
        style={{ display: "none" }}
      />
      <InputLabel htmlFor="image-input">
        <Fab style={style} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </InputLabel> */}
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleUploadClick}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" style={style}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
      {prescriptions.map(({ id, name }) => (
        <h4 key={id}> {name}</h4>
      ))}
      <Fragment>
        <CardActionArea>
          {state.selectedFile ? (
            <img width="30%" height="150" src={state.selectedFile} alt="" />
          ) : (
            ""
          )}
        </CardActionArea>
      </Fragment>
    </>
  );
}

export default Dashboard;
