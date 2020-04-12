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
        <div className="signup">
           
            <div className="formpicbox">
                <img src="https://cdn.shopify.com/s/files/1/1227/0104/files/81751E5B-E733-4FF7-A7E8-67A701250602_1.jpg?v=1493939498" className="formpic" />
            </div>
            <div className="signform">
                <h1>SIGN UP</h1>
                <form onSubmit={handleSignupSubmit}>
            <div>
                <label>Name: </label>
                <input required type="text" name="name" onChange={e=>setName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input required type="text" name="email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input required type="password" name="password" onChange={e=>setPassword(e.target.value)} />
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