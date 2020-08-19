import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Modal,
  Backdrop,
  Fade,
  makeStyles,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { register } from "../../services/auth.service";

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
}));

export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Create user object
    const newUser = {
      name,
      email,
      password,
    };

    //Attempt to Register
    register(newUser).then(
      (response) => {
        setData(response.data);
        handleClose();
        clearFields();
        // showMessage("Registration successful");
        toast.success("Registration successful");
      },
      (error) => {
        // showMessage(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
    );
  };

  // //Shows Toast messages
  // const showMessage = (message) => {
  //   if (message) return toast(message);
  // };

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Button type="button" color="inherit" onClick={handleOpen}>
        Register
      </Button>

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
              <Typography align="center" variant="h6" color="primary">
                Register
              </Typography>

              <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                  required
                  autoFocus
                  id="name"
                  label="Name"
                  type="text"
                  className={classes.textfield}
                  fullWidth
                  onChange={(e) => setName(e.target.value.trim())}
                  inputProps={{ minLength: 3 }}
                />
                <TextField
                  required
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  className={classes.textfield}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  className={classes.textfield}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value.trim())}
                  inputProps={{ minLength: 6 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                  fullWidth
                >
                  Register
                </Button>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
