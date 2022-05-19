import React, { useEffect, useState } from 'react'
import Channel from './channel'
import './channelbar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import firestore, { auth } from './firebase';

function ChannelBar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        firestore.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),

            })))
        })
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt('Channel Name:');
        if (channelName) {
            firestore.collection('channels').add({
                channelName
            })
        };
    };

    return (
        <div className='channelbar'>
            <div className='bar-top'>
                <h3>Party Up</h3>
                <ExpandMoreIcon />
            </div>
            <div className='channels'>
                <div className='channels-header'>
                    <div className='bar-header'>
                        <ExpandMoreIcon />
                        <h4>Channels</h4>
                    </div>
                    <AddIcon className='add-channel' onClick={handleAddChannel} />
                </div>

                <div className='channels-list'>
                    {channels.map(({ id, channel }) => (
                        <Channel key={id} id={id} channel={channel.channelName}/>
                    ))}
                </div>

                <div className='bar-profile'>
                    <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                    <div className='bar-profile-info'>
                        <h3>{user.display}</h3>
                        <p>#{user.uid.substring(0, 5)}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelBar;