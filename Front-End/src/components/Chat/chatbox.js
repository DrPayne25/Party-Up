import React, { useEffect, useState, useRef } from 'react';
import './chatbox.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Message from './message'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import firestore from './firebase';
import firebase from 'firebase/compat/app';

function ChatBox() {
	const user = useSelector(selectUser);
	const id = useSelector(selectChannelId);
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const dummy = useRef();

	useEffect(() => {
		if (id) {
			firestore.collection('channels')
			.doc(id)
			.collection('messages')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) => 
				setMessages(snapshot.docs.map((doc) => doc.data()))
			);
		}
	}, [id]);

	const sendMessage = async (e) => {
		e.preventDefault()
		
		await firestore.collection('channels').doc(id).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			user: user,
		});
		setInput('')
	};

	return (
		<div className='chatbox'>
			<ChatBoxHeader />

			<div className='chatbox-messages'>
				{messages.map(message => (
					<Message 
						timestamp={message.timestamp}
						message={message.message}
						user={message.user}
					/>
				))}
			</div>

			<div className='chatbox-input'>
				<AddCircleIcon fontSize='large' />
				<form>
					<input value={input} disabled={!id} onChange={(e) => setInput(e.target.value)} placeholder='Say something nice...' />
					<button type='submit' className='chatbox-send-button' onClick={sendMessage}>Send</button>
				</form>
			</div>
		</div>
	)
}

function ChatBoxHeader() {
	const channel = useSelector(selectChannelName);

	return (
		<div className='chatbox-header'>
			<h3>
				<span className='chatbox-header-hash'>#</span>
				{channel}
			</h3>
		</div>
	)
}

export default ChatBox