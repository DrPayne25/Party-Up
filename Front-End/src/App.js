import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landing from './components/Landing/Landing.js';
import SignUp from './components/sign-up.js';
import Feed from './components/Profile/Feed.js';
import Profile from './components/Profile/Profile.js';
import FriendsList from './components/Profile/friends-list.js';
import About from './components/about'


//      removed the <BrowserRouter> tags as I was getting an error: 
//      "You cannot Render a Browser inside another Browser"
//      this is because the <App /> is wrapped inside a Router inside index.js
const App = () => {
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
                            <Feed />
                        }
                    />
                    <Route 
                        exact path='/profile'
                        element={
                            <Profile />
                        }
                    />
                    <Route 
                        exact path='/friends-list'
                        element={
                            <FriendsList />
                        }
                    />
                    <Route 
                        exact path='/about'
                        element={
                            <About />
                        }
                    />
                    <Route 
                        exact path='/profile'
                        element={
                            <Profile />
                        }
                    />
                </Routes>
        </div>
    )
}

export default App;