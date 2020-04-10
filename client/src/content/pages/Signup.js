import React from "react"

function Signup() {
    return (
        <div className="signup">
            <div className="signform">
                <h1>SIGN UP</h1>
                <form action="/profile" method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup