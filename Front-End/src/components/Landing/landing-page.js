import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SignupButton from './sign-up-button';
import Header from '../header';
import { Card, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import ProfComplButton from '../Profile/profile-complete-button'
import axios from 'axios';
import Background from '../background';
// import Hearthstone from '../../assets/HS_logo.png'

const LandingPage = () => {
    const location = useLocation();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const intialValues = { id: null, logged_in: false, first_name: '', last_name: '', email: '', username: '', dob: '', about_me: '', currency: 0, prof_comp: false };
    const [userValues, setUserValues] = useState(intialValues);
    const { logout } = useAuth0();

    useEffect(() => {
        const findUser = async () => {
            if (isAuthenticated) {

                let data;
                // change this to our deployed db later, make sure it is an .env variable  
                await axios.get('https://627fe5a41020d8520577cdd2.mockapi.io/p_up/users/?email=' + user.email)
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
                                axios.put('https://627fe5a41020d8520577cdd2.mockapi.io/p_up/users/' + data[0].id, { logged_in: true })

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
                <h1 className='main-title2'>Party Up!</h1>
                <ProfComplButton userValues={userValues} />
                <div className='card-style1'>
                    <Card className='cards' style={{ width: '20rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://user-images.githubusercontent.com/81993283/169421645-99dc9406-1fe6-413c-be39-1b1e1ed3e33e.png"/>
                        <Card.Body>
                            <Card.Title>HearthStone</Card.Title>
                            <Card.Text>
                                A card game that brings the magical experience of W.O.W into a card game.
                            </Card.Text>
                            <Link to='//playhearthstone.com/en-us' target='_blank' rel='noopener noreferrer'>
                                <Button variant="primary">Visit Site</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='cards' style={{ width: '20rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ24CqT9Lzul1Dq2H2GWEgd3uZld8HBoEO0g&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Call Of Duty</Card.Title>
                            <Card.Text>
                                A Multi-player first person shooter that allows for some crazy highlights.
                            </Card.Text>
                            <Link to='//www.callofduty.com/' target='_blank' rel='noopener noreferrer'>
                                <Button variant="primary">Visit Site</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='cards' style={{ width: '20em' }}>
                        <Card.Img className='card-image' variant="top" src="https://www.hrkgame.com/media/games/.thumbnails/header_Hwvf24M.jpg/header_Hwvf24M-460x215.jpg" />
                        <Card.Body>
                            <Card.Title>Elden Ring</Card.Title>
                            <Card.Text>
                                Adventure game not for the faint of heart!
                            </Card.Text>
                            <Link to='//en.bandainamcoent.eu/elden-ring/elden-ring' target='_blank' rel='noopener noreferrer'>
                                <Button variant="primary">Visit Site</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='cards' style={{ width: '20rem' }}>
                        <Card.Img className='card-image' variant="top" src="https://user-images.githubusercontent.com/81993283/169421615-3a5706c3-62c1-43fc-b7e5-351ae16df99f.png" />
                        <Card.Body>
                            <Card.Title>NBA 2k22</Card.Title>
                            <Card.Text>
                                Basketball game for those that would like a competative edge.
                            </Card.Text>
                            <Link to='//nba.2k.com/' target='_blank' rel='noopener noreferrer'>
                                <Button variant="primary">Visit Site</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>    
            </div>
        )
    }
    return (
        <div className='background-main'>
            <Header />
            <h1 className='main-title'>Party Up!</h1>
            <SignupButton />
            <div>
                <h1 className='extend-page'>h</h1>
            </div>
        </div>
    )
}

export default LandingPage;
