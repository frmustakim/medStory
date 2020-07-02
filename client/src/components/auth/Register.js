import React from "react";
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <form action="" className={classes.form}>
                <TextField
                  required
                  autoFocus
                  id="name"
                  label="Name"
                  type="text"
                  className={classes.textfield}
                  fullWidth
                />
                <TextField
                  required
                  id="mobile-number"
                  label="Mobile Number"
                  placeholder="i.e. 017xxxxxxxx"
                  type="tel"
                  className={classes.textfield}
                  fullWidth
                />

                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  className={classes.textfield}
                  fullWidth
                />

                <Button
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
