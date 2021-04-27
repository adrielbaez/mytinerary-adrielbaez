import React from 'react';
import { Link } from 'react-router-dom'

class SignIn extends React.Component {

    render() {
        return (
            <div className="container-all">
                <div className="container-form">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password"  name="password" placeholder="Password" />
                        </div>
                        <button className="btn-form solid">Sign In</button>
                        <p className="social-text">Or Sign in with social platforms</p>
                    </form>
                </div>
                <div className="call-to-action-form">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!</p>
                        <Link to="/signup">
                            <button className="btn-redirect" id="sign-up-btn">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn