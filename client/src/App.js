import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from './content/components/Nav';
import Content from './content/Content';



function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const setUserToken = (responseData) => {
    if (responseData) {
      console.log("🐻")
      setToken(responseData.token)
      setUser(responseData.user)
    } else {
      setToken(null)
      setUser(null)
    }
  }
  const updateUser = newUserDeets => {
    setUser(newUserDeets)
  }

  return (
    <Router>
      <div className="app">
        <Nav />
        <Content user={user} token={token} setUserToken={setUserToken} updateUser={updateUser} />
      </div>
    </Router>
  );
}

export default App;
