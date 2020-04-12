import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';


function Login(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { email, password })
        .then(response => {
        if (response.data.mesage) {
            props.setUserToken(null)
        } else {
            props.setUserToken({ user: response.data.user, token: response.data.token})
        }
        }).catch(err=>console.log(err))
    }

    if (props.user) return <Redirect to='/' />

    return (
        <div className="login">
            <div className="loginimg">
                <img src=""/>            
            </div>
            <div className="signform">
                <h1>LOG IN</h1>
                <form onSubmit={handleLoginSubmit}>
            <div>
                <label>Email: </label>
                <input type="text" name="email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
            </form>
            </div>
        </div>
    )
}

export default Login