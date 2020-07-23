import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import Register from "./auth/Register";
import LoginModal from "./auth/LoginModal";

export default class AppNavBar extends Component {
  render() {
    return (
      <div style={{ flexGrow: "1" }}>
        <AppBar position="static" color="secondary">
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
      </div>
    );
  }
}
