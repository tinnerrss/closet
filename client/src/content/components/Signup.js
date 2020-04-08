import React from "react"

function Signup() {
    return (
        <div className="signup">
            <form action="/profile" method="POST">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup