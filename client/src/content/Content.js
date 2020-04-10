import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Auth from './Auth'



function Content (){
  return (
    <div className="container">
      <Route exact path="/" render={ () => <Homepage />} />
      <Route path="/profile" render={ () => <Profile /> } />
      <Route path="/auth/login" render={ () => <Login /> } />
      <Route path="/auth/signup" render={ () => <Signup /> } />
      <Route path="/authtest" render={ () => <Auth /> } />
    
    </div>
  )
}

export default Content;
