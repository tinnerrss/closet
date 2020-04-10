import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Auth(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

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
    
    const handleSignupSubmit = e => {
        e.preventDefault()
        let payload = {name, email, password}
        if (photo) payload.photo = 

        axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, payload)
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
        <div className="auth-container">
        <div className="auth-panel">
            <h3>Login</h3>
            <form onSubmit={handleLoginSubmit}>
            <div>
                <label>Email: </label>
                <input type="email" onChange={e=>setEmail(e.target.value)} />
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
        <div className="divider"></div>
        <div className="auth-panel">
            <h3>Signup</h3>
            <form onSubmit={handleSignupSubmit}>
            <div>
                <label>Name: </label>
                <input required type="text" onChange={e=>setName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input required type="email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
                <label>Photo: </label>
                <input type="text" onChange={e=>setPhoto(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input required type="password" onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Signup" />
            </div>
            </form>
        </div>
        </div>
        )
    }

export default Auth;