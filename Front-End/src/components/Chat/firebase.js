import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD9_iJhPC7MqxSaHDcwGl393oauYcAHljs",
    authDomain: "party-up-chat.firebaseapp.com",
    databaseURL: "https://party-up-chat-default-rtdb.firebaseio.com",
    projectId: "party-up-chat",
    storageBucket: "party-up-chat.appspot.com",
    messagingSenderId: "639313012265",
    appId: "1:639313012265:web:6f7d1c34711a4a5bb0de38",
    measurementId: "G-EH5Q868NMB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth()
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default firestore;

