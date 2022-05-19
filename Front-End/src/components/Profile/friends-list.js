import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header';

const FriendsList = () => {
    const location = useLocation();
    
    return (
        <Header userValues={location.state.userValues.userValues} />
    )
}

export default FriendsList
