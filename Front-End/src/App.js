import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landing from './components/Landing.js';
import SignUp from './components/SignUp.js';

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
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;