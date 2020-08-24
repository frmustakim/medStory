import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import Register from "./auth/Register";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";

export default function AppNavBar({ user }) {
  const authLinks = (
    <Fragment>
      <Typography>
        <span style={{ marginRight: "1rem" }}>
          {user ? `${user.name.toUpperCase()}` : ""}
        </span>
      </Typography>
      <Logout />
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <LoginModal />
      <Register />
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position="static" color="secondary" style={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: "1" }}>
            <Link color="inherit" underline="none" href="">
              <span style={{ color: "skyBlue" }}>Med</span>Story
            </Link>
          </Typography>
          <Fragment>{user ? authLinks : guestLinks}</Fragment>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
