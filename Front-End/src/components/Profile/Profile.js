import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { first_name, last_name, username, email, about_me } = user;

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
