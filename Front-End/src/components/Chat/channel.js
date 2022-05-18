import React from 'react';
import './channel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';

function Channel({ id, channel }) {
    const dispatch = useDispatch()
    return (
        <div className='bar-channel' onClick={() => dispatch(setChannelInfo({
            channelId: id, 
            channelName: channel,
        }))}>
            <h4>
                <span className='bar-channel-hash'>#</span>
                {channel}
            </h4>
        </div>
    )
}

export default Channel