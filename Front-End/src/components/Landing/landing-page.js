import React from 'react';
import SignupButton from './sign-up-button';
import Header from '../header';
import { useAuth0 } from "@auth0/auth0-react"; 

const LandingPage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { first_name, last_name, username, email, about_me } = user;

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
                <p>{email}</p>
                
            </div>
        )
    }
    
}

export default LandingPage;
