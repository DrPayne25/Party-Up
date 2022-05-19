import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from 'react-bootstrap';
import axios from "axios";

const LogoutButton = (userValues) => {
  const { logout } = useAuth0();
  
  return (
    <Button variant="danger"
      onClick={() => {
        axios.put('http://34.208.228.216:8000/party_up_api/profile/'+userValues.userValues.id, {logged_in: false})
        logout({ returnTo: window.location.origin });
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
