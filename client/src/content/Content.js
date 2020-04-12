import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Auth from './Auth'



function Content (props){
  return (
    <div className="container">
      <Route exact path="/" render={() => <Homepage user={props.user} token={props.token} />} />
      <Route path="/profile" render={ () => <Profile /> } />
      <Route path="/auth/login" render={ () => <Login user={props.user} setUserToken={props.setUserToken} /> } />
      <Route path="/auth/signup" render={ () => <Signup user={props.user} setUserToken={props.setUserToken} /> } />
      <Route path='/authtest' render={() => <Auth user={props.user} setUserToken={props.setUserToken} />} />
    
    </div>
  )
}

export default Content;
