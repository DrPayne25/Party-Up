import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelBar from './channelbar';
import ChatBox from './chatbox';
import ChatLogin from './chatlogin';
import Header from '../header'
import './chat.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from './firebase';
import { login, logout } from '../../features/userSlice';

function Chat() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const location = useLocation();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    display: authUser.displayName
                }))
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch])
    return (
        <div className="chat">
            <Header userValues={location.state.userValues.userValues} />
            <div className='chat-content'>
                {user ? (
                    <>
                        <ChannelBar />
                        <ChatBox />
                    </>
                ) : (
                    <ChatLogin />
                )}
            </div>
        </div>
    );
}

export default Chat;
