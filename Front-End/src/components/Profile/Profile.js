import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { first_name, last_name, username, email, about_me } = user;

    const axios = require('axios').default;
    const intialValues = { first_name: '', last_name: '', email: '', username: '', password: '', dob: '', about_me: '' };

    const [userValues, setUserValues] = useState(intialValues);

    useEffect(() => {
        // function handleStatusChange(status) {
        //     setIsOnline(status.isOnline);
        // }

        let data ;
        // change this to our deployed db later, make sure it is an .env variable  
        axios.get('https://627fe5a41020d8520577cdd2.mockapi.io/p_up/users/bob_dole_is_swole')
        .then(res => {
            data = res.data;
            console.log(data)
            this.setState({
                details : data    
            });
        })
        .catch(err => {})    
      });    

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>                
                <Header />
                <ProfilePic>
                    <img src='http://placekitten.com/300/300' alt='' />
                </ProfilePic>
                <About>
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{about_me}</p>
                    <p>Debug Info:</p>
                    {JSON.stringify(user,null,2)}                    
                </About>
                <Post>
                    <form>
                        <label>Post something</label>
                        <input type='text'/>
                    </form>
                </Post>
                <Achievements>
                    <h1>Achievements go here</h1>
                </Achievements>
            </div>
        )
    );
};

const ProfilePic = styled.div``
const About = styled.div``
const Post = styled.div``
const Achievements = styled.div``

export default Profile;
