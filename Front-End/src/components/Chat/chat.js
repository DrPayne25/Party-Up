import React, { useEffect, useRef, useState } from 'react';
import ChannelBar from './channelbar';
import ChatBox from './chatbox';
import ChatLogin from './chatlogin';
import './chat.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from './firebase';
import { login, logout } from '../../features/userSlice';

function Chat() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

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
            {user ? (
                <>
                    <ChannelBar />
                    <ChatBox />
                </>
            ): (
                <ChatLogin />
            )}
        </div>
    );
}




// function SignIn() {

//     const signInWithGoogle = () => {
//         auth.signInWithPopup(provider);
//     }

//     return (
//         <>
//             <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//         </>
//     )

// }

// function SignOut() {
//     return auth.currentUser && (
//         <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//     )
// }


// function ChatRoom() {
//     const dummy = useRef();
//     const messagesRef = firestore.collection('messages');
//     const query = messagesRef.orderBy('createdAt').limit(25);

//     const [messages] = useCollectionData(query, { idField: 'id' });

//     const [formValue, setFormValue] = useState('');


//     const sendMessage = async (e) => {
//         e.preventDefault();

//         const { uid, photoURL } = auth.currentUser;

//         await messagesRef.add({
//             text: formValue,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//             uid,
//             photoURL
//         })

//         setFormValue('');
//         dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }

//     return (<>
//         <main>

//             {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//             <span ref={dummy}></span>

//         </main>

//         <form onSubmit={sendMessage}>

//             <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//             <button type="submit" disabled={!formValue} className='sendbutton'>Send</button>

//         </form>
//     </>)
// }


// function ChatMessage(props) {
//     const { text, uid, photoURL } = props.message;

//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//     return (<>
//         <div className={`message ${messageClass}`}>
//             <img src={'http://placekitten.com/300/300'} className='chatimg' />
//             <p>{text}</p>
//         </div>
//     </>)
// }


export default Chat;