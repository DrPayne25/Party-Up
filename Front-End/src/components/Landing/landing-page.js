import React, { useState, useEffect } from 'react';
import SignupButton from './sign-up-button';
import Header from '../header';
import party_up_logo from '../../assets/party_up_logo.png'
import { Card, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import ProfComplButton from '../Profile/profile-complete-button'
import axios from 'axios';


const LandingPage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    
    const intialValues = { logged_in: false, first_name: '', last_name: '', email: '', username: '', dob: '', about_me: '', currency: 0, prof_comp: false };
    const [userValues, setUserValues] = useState(intialValues);
    // const [errorMessage, setErrorMessage] = useState({});



    useEffect(() => {
        const findUser = async () => {
            if (isAuthenticated) {
                // const { email } = user;
                
                let data;
                // change this to our deployed db later, make sure it is an .env variable  
                await axios.get('https://627fe5a41020d8520577cdd2.mockapi.io/p_up/users/1')
                    .then(res => {
                        data = res.data;

                        if (data.email === user.email) {
                            try {
                                const newValues = { 
                                    logged_in: data.logged_in,
                                    first_name: data.first_name,
                                    last_name: data.last_name,
                                    email: data.email,
                                    username: data.username,
                                    dob: data.dob,
                                    about_me: data.about_me,
                                    currency: data.currency,
                                    prof_comp: data.prof_comp };

                                setUserValues(newValues)                                
                            }
                            catch {
                                setUserValues(  userValues.prof_comp = false )
                            }
                        }
                    })
            }
        }
        
        findUser().catch(console.error);
    },[user]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        return (
            <div>
                <Header />
                <h1>Partying On a Tuesday, Eh Lou?</h1>
                <ProfComplButton isComplete={userValues} />
                <p>First Name: {userValues.first_name}</p>
                <p>Last Name: {userValues.last_name}</p>
                <p>Handle: {userValues.username}</p>
                <p>Email: {userValues.email}</p>
                <p>About Myself: {userValues.about_me}</p>
                <p>I got ${userValues.currency} in site bucks.</p>
            </div>
        )
    }
    return (
        <div className='landing-background'>
            <Header />
            <h1>Party Up!</h1>
            <SignupButton />
            <div className='card-style'>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZSZP3BRkh8Tyllj0wCqKUVS-dJPA8mY21Q&usqp=CAU" />
                    <Card.Body>
                    <Card.Title>HearthStone</Card.Title>
                    <Card.Text>
                        A card game that brings the magical experience of W.O.W into a card game.
                    </Card.Text>
                    <Button variant="primary" onclick="location.href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZSZP3BRkh8Tyllj0wCqKUVS-dJPA8mY21Q&usqp=CAU'">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div> 
    )
}

export default LandingPage;
