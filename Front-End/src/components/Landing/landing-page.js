import React from 'react';
import SignupButton from './sign-up-button';
import Header from '../header';
import { useAuth0 } from "@auth0/auth0-react"; 

const LandingPage = () => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated){
        return (
            <div>
                <Header />
                <h1>Party Up!</h1>
                <img src='http://placekitten.com/700/670' alt='' />
                <SignupButton />
            </div>
        )
    }else{
        return (
            <div>
                <Header />
                <h1>Partying On a Tuesday, Eh Lou?</h1>
                
            </div>
        )
    }
    
}

export default LandingPage;
