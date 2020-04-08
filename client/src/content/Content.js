import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Profile from './pages/Profile'



function Content (){
  return (
    <div className="container">
      <Route exact path="/" render={ () => <Homepage />} />
      <Route path="/profile" render={ () => <Profile /> } />
    </div>
  )
}

export default Content;
