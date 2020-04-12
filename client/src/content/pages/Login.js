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
                <h1> Welcome Back!</h1>
                <form onSubmit={handleLoginSubmit}>
            <div>
                <input type="text" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
            </form>
            </div>
            <div className="formpicbox">
                <img src="https://i.pinimg.com/originals/3c/49/c3/3c49c3e03241fab87453bad50e806ab8.jpg" className="formpic" />
            </div>
        </div>
    )
}

export default Login