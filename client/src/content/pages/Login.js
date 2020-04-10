import React from "react"

function Login() {
    return (
        <div className="login">
            <div className="loginimg">
                <img src=""/>            
            </div>
            <div className="signform">
                <h1>LOG IN</h1>
                <form action="/profile" method="POST">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login