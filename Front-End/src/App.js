import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landing from './components/Landing/Landing.js';
import SignUp from './components/SignUp.js';
import Feed from './components/Feed/Feed.js';
import Profile from './components/Profile/Profile.js';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
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
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;