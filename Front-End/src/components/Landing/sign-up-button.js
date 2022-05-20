import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'

const SignUpButton = () => { 
    const { loginWithRedirect } = useAuth0();
    
    const handleClick = () => {
        loginWithRedirect({
            screen_hint: "signup",
          })
    }

    return (
        <div className='sign-up-button'>
          <AwesomeButton type='instagram'
            onClick={handleClick}
          >
          Start Playing - It's Free!
          </AwesomeButton>
        </div>
      );
    
};    

export default SignUpButton;

