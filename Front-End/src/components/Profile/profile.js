import React, { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
// import post_modal from './profile-post-modal';

const Profile = () => {
    const location = useLocation();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { id, logged_in, first_name, last_name, email, username, dob, about_me, currency, prof_comp } = location.state.userValues.userValues;

    const axios = require('axios').default;

    useEffect(() => {
           
      });    

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>                
                <Header userValues={location.state.userValues.userValues} />
                <ProfilePic>
                    <img src='http://placekitten.com/300/300' alt='' />
                </ProfilePic>
                <About>
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{about_me}</p>
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
