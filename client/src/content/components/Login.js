import React from "react"

function Login() {
    return (
        <div className="login">
            <form action="/profile" method="POST">
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Login