import React from 'react';
import { Link } from 'react-router-dom'

class SignUp extends React.Component {

    render() {
        return (
            <div className="container-all">
                <div className="call-to-action-form">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!</p>
                        <Link to="/signin">
                            <button className="btn-redirect" id="sign-up-btn">Sign In</button>
                        </Link>
                    </div>
                </div>
                <div className="container-form">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="firstName" placeholder="Your First Name" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="lastName" placeholder="Your Last Name" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Your Password" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" name="urlPicture" placeholder="URL of Your Picture" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <select>
                                <option disabled selected>Choose Your Country</option>
                            </select>
                        </div>

                        <button className="btn-form solid">Sign In</button>
                        <p className="social-text">Or Sign in with social platforms</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp