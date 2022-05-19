import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import SignupButton from './sign-up-button';
import Header from '../header';
import { Card, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import ProfComplButton from '../Profile/profile-complete-button'
import axios from 'axios';

const LandingPage = () => {
    // const location = useLocation();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const intialValues = { id: null, logged_in: false, first_name: '', last_name: '', email: '', username: '', dob: '', about_me: '', currency: 0, prof_comp: false };
    const [userValues, setUserValues] = useState(intialValues);

    useEffect(() => {
        const findUser = async () => {
            if (isAuthenticated) {

                let data;
                // change this to our deployed db later, make sure it is an .env variable  
                await axios.get('http://localhost:8000/profiles/?email=' + user.email)
                    .then(res => {
                        data = res.data;
                        try {
                            if (data[0].email === user.email) {
                                const newValues = {
                                    id: data[0].id,
                                    logged_in: true,
                                    first_name: data[0].first_name,
                                    last_name: data[0].last_name,
                                    email: user.email,
                                    username: data[0].username,
                                    dob: data[0].dob,
                                    about_me: data[0].about_me,
                                    currency: data[0].currency,
                                    prof_comp: data[0].prof_comp
                                };

                                setUserValues(newValues)
                                // change this to our deployed db later, make sure it is an .env variable
                                axios.put('http://localhost:8000/profiles/' + data[0].id, { logged_in: true })

                            } else {
                                setUserValues(userValues.prof_comp = false)
                            }
                        }
                        catch {
                            const newValues = {
                                id: null,
                                logged_in: false,
                                first_name: '',
                                last_name: '',
                                email: user.email,
                                username: '',
                                dob: '',
                                about_me: '',
                                currency: 0,
                                prof_comp: false
                            };

                            setUserValues(newValues)
                        }
                    })
            }
        }

        findUser().catch(console.error);
    }, [user]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        return (
            <div className='background-main'>
                <Header userValues={userValues} />
                <ProfComplButton userValues={userValues} />

                <div className='card-style'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZSZP3BRkh8Tyllj0wCqKUVS-dJPA8mY21Q&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>HearthStone</Card.Title>
                            <Card.Text>
                                A card game that brings the magical experience of W.O.W into a card game.
                            </Card.Text>
                            <Button variant="primary" onClick="location.href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZSZP3BRkh8Tyllj0wCqKUVS-dJPA8mY21Q&usqp=CAU'">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
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
