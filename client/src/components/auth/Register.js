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
    padding: "3%",
  },
  textfield: {
    marginBottom: 12,
  },
}));

export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
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
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
