import React, { useState, Fragment } from "react";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {
  Card,
  CardContent,
  Button,
  Modal,
  Backdrop,
  Fade,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 10,
    outline: "none",
  },
  form: {
    textAlign: "center",
    padding: "3%",
  },
  textfield: {
    marginBottom: 12,
  },
  fabStyle: {
    margin: 0,
    top: "auto",
    right: 25,
    bottom: 110,
    left: "auto",
    position: "fixed",
    color: "blue",
    zIndex: "1",
  },
}));

function Upload({ user, uploaded }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  // const [uploadedFile, setUploadedFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  // console.log(user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUploadClick = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);

    //Open modal
    handleOpen();

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = (e) => {
      setSelectedFile([reader.result]);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("patient", user.name);
    formData.append("userId", user._id);

    try {
      // const res =
      await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // const { fileName, filePath } = res.data;
      // // console.log(filePath);
      // setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        // console.log("There was a problem with the server");
        toast.error("There was a problem with the server");
      } else {
        // console.log(err.response.data.msg);
        toast.error(err.response.data.msg);
      }
    }

    //close modal
    handleClose();
    // window.location.reload();
    uploaded();
  };

  return (
    <Fragment>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleUploadClick}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.fabStyle}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
      <Modal
        aria-labelledby="transition-modal-Register"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.card}>
            <CardContent>
              <form onSubmit={handleSubmit} className={classes.form}>
                {selectedFile ? (
                  <div>
                    <div>
                      <img
                        // maxWidth="345"
                        height="140"
                        src={selectedFile}
                        alt=""
                      />
                    </div>
                    <strong>{filename}</strong>
                  </div>
                ) : (
                  ""
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                  fullWidth
                >
                  Upload
                </Button>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default Upload;
