import React, { Fragment, useState, useEffect } from "react";
import Upload from "./Upload";
import { getPrescriptions } from "../services/data.service";
import {
  makeStyles,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "70%",
    margin: "0 auto",
    position: "relative",
  },
  imgStyle: {
    width: "100%",
    maxWidth: "inherit",
  },
  delBtnntainer: {
    position: "absolute",
    top: "0.25rem",
    right: "0.25rem",
  },
  delIcon: {
    position: "inherit",
    color: "#404040",
  },
}));

function Dashboard({ user }) {
  const classes = useStyles();
  const [prescriptions, setPrescriptions] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    getPrescriptions(user).then((items) => {
      if (items) {
        console.log(items.data);
        setCount(items.data.length);
        setPrescriptions(items.data);
        return;
      }
    });
  }, [user, count]);
  // console.log(prescriptions);
  const increment = () => {
    setCount(count + 1);
  };

  const handleDelete = () => {
    alert("Delete clicked!");
  };

  return (
    <Fragment>
      <div style={{ minHeight: "50vh" }}>
        {user ? <Upload user={user} uploaded={increment} /> : ""}
        <Typography variant="h6" align="center" gutterBottom>
          Dashboard
        </Typography>
        {prescriptions && count === 0 ? (
          <Container align="center" style={{ marginTop: "5rem" }}>
            <Typography variant="h6" color="error">
              You currently have no Prescriptions!
            </Typography>
          </Container>
        ) : (
          ""
        )}
        {prescriptions ? (
          prescriptions.map(({ _id, md5, patient, image }) => {
            const buffer = Buffer.from(image.data.data);
            const imgsrc = buffer.toString("base64");

            return (
              <div key={_id} className={classes.card}>
                {/* <h4>  {patient} </h4> */}
                <img
                  className={classes.imgStyle}
                  key={md5}
                  src={`data:${image.mimetype};base64,${imgsrc}`}
                  alt={image.name}
                />
                <IconButton
                  aria-label="delete"
                  className={classes.delBtnntainer}
                  onClick={handleDelete}
                >
                  <DeleteIcon className={classes.delIcon} />
                </IconButton>
              </div>
            );
          })
        ) : (
          <Container align="center" style={{ marginTop: "5rem" }}>
            <Typography variant="h6" color="error">
              Loading Prescriptions...
            </Typography>
          </Container>
        )}
      </div>
    </Fragment>
  );
}

export default Dashboard;
