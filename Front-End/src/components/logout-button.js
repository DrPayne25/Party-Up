import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from 'react-bootstrap';
import axios from "axios";

const LogoutButton = (userValues) => {
  const { logout } = useAuth0();
  
  return (
    <Button variant="outline-danger"
      onClick={() => {
        axios.put('https://627fe5a41020d8520577cdd2.mockapi.io/p_up/users/'+userValues.userValues.id, {logged_in: false})
        logout({ returnTo: window.location.origin });
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
