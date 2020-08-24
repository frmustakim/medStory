import React from "react";
import { Button } from "@material-ui/core";
import { logout } from "../../services/auth.service";

function Logout() {
  const onClick = () => {
    logout();
    window.location.reload();
  };

  return (
    <div>
      <Button color="inherit" onClick={onClick}>
        Logout
      </Button>
    </div>
  );
}

export default Logout;
