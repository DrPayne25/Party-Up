import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => { 
    const { loginWithRedirect } = useAuth0();

    const handleClick = () => {
        loginWithRedirect({
            screen_hint: "signup",
          })
    }

    return (
        <button 
          onClick={handleClick}
        >
            Start Playing - It's Free!
        </button>
      );
    
};    
   
export default SignUpButton;

