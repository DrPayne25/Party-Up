import React from 'react';
import './chatlogin.css';
import Button from '@material-ui/core/Button'
import { auth, provider } from './firebase';

function ChatLogin() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	}
	return (
		<div className='chatlogin'>
			<Button onClick={signIn}>Sign In</Button>
		</div>

	)
}

export default ChatLogin