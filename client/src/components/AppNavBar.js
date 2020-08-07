import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import Register from "./auth/Register";
import LoginModal from "./auth/LoginModal";

export default function AppNavBar() {
  return (
    <Fragment style={{ flexGrow: "1" }}>
      <AppBar position="static" color="secondary" style={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: "1" }}>
            <Link color="inherit" underline="none" href="">
              <span style={{ color: "skyBlue" }}>Med</span>Story
            </Link>
          </Typography>
          <Fragment>
            {/* <Button color="inherit" href="">
                About
              </Button>
              <Button color="inherit" href="">
                Contact
              </Button> */}
            <Register />
            <LoginModal />
          </Fragment>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
