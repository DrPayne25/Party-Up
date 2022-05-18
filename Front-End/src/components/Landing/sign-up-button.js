import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

const SignUpButton = () => { 
    const { loginWithRedirect } = useAuth0();
      
    const handleClick = () => {
        loginWithRedirect({
            screen_hint: "signup",
          })
    }

    return (
        <div>
          <Button variant="outline-dark"
            onClick={handleClick}
          >
          Start Playing - It's Free!
          </Button>
        </div>
      );
    
};    

export default SignUpButton;

