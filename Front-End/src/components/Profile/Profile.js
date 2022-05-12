import React from 'react';
import styled from 'styled-components'
import Header from '../Header';

const Profile = () => {
    return (
        <div>
            <Header />
            <ProfilePic>
                <img src='http://placekitten.com/300/300' alt='' />
            </ProfilePic>
            <About>
                <h1>Stuff about me</h1>
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
}

const ProfilePic = styled.div``
const About = styled.div``
const Post = styled.div``
const Achievements = styled.div``

export default Profile