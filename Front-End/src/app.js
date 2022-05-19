import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route.js';
import React from 'react';
import Landing from './components/Landing/landing-page.js';
import SignUp from './components/sign-up.js';
import Feed from './components/Profile/feed.js';
import Profile from './components/Profile/profile.js';
import FriendsList from './components/Profile/friends-list.js';
import About from './components/about'
import Chat from './components/Chat/chat'
import { useAuth0 } from '@auth0/auth0-react';

//      removed the <BrowserRouter> tags as I was getting an error: 
//      "You cannot Render a Browser inside another Browser"
//      this is because the <App /> is wrapped inside a Router inside index.js
const App = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div className='App'>
            <Routes>
                <Route
                    exact path='/'
                    element={
                        <Landing />
                    }
                />
                <Route
                    exact path='/signup'
                    element={
                        <SignUp />
                    }
                />
                <Route
                    exact path='/feed'
                    element={
                        <ProtectedRoute isAuth={isAuthenticated}>
                            <Feed />
                        </ProtectedRoute>                        
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <ProtectedRoute isAuth={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact path='/friends-list'
                    element={
                        <ProtectedRoute isAuth={isAuthenticated}>
                            <FriendsList />
                        </ProtectedRoute>                        
                    }
                />
                <Route
                    exact path='/about'
                    element={
                        <About />
                    }
                />
                <Route
                    exact path='/chat'
                    element={
                        <ProtectedRoute isAuth={isAuthenticated}>
                            <Chat />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    )
}

export default App;
