import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';


function Signup(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignupSubmit = e => {
        e.preventDefault()
        let payload = {name, email, password}

        axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, payload)
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
        <div className="signup">
           
            <div className="formpicbox">
                <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="formpic" />
            </div>
            <div className="signform">
                <h1>SIGN UP</h1>
                <form onSubmit={handleSignupSubmit}>
            <div>
                <input required type="text" name="name" placeholder="Name" onChange={e=>setName(e.target.value)} />
            </div>
            <div>
                <input required type="text" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
                <input required type="password" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Signup" />
            </div>
            </form>
            </div>
        </div>
    )
}

export default Signup