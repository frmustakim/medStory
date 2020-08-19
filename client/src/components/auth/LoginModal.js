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
    padding: "7%",
  },
  textfield: {
    marginBottom: 12,
  },
}));

export default function LoginModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    console.log("email", email);
    console.log("password", password);
    console.log(input);
  };

  return (
    <div>
      <Button type="button" color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-Login"
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
                Login
              </Typography>
              <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                  required
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  className={classes.textfield}
                  fullWidth
                  onChange={onChange}
                />

                <TextField
                  required
                  type="password"
                  name="password"
                  id="password"
                  label="Password"
                  className={classes.textfield}
                  fullWidth
                  onChange={onChange}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
