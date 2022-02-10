import React from 'react'

const Login = () => {
    return(
        <div className="container">
            <h1>Welcome to the Pokemon Center PC System</h1>
            <p>Please Log in!</p>
            <form>
                <div className="form_control">
                    <input type="text" required />
                    <label>Email</label>
                </div>

                <div className="form_control">
                    <input type="password" required />
                    <label>Password</label>
                </div>

                <button className="btn">Login</button>
                <p className="text">Don't have an account? 
                    <a href="#">Register</a>
                </p>
            </form>
        </div>
    )
};

export default Login;