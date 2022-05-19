import React from 'react';
import './message.css';
import { Avatar } from '@material-ui/core';

function Message({ timestamp, message, user }) {
  timestamp = timestamp && timestamp.toDate() && timestamp.toDate().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  });
  
  return (
    <div className='message'>
      <Avatar src={user.photo} />
      <div className='message-info'>
        <h4>
          {user.display}
          <span className='message-timestamp'>
            {timestamp}
          </span>
        </h4>
        <p>{message}</p>
      </div>

    </div>
  )
}

export default Message