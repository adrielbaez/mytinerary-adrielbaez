import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login';


const SignIn = (props) => {

    const [user, setUser] = useState({ email: '', password: '' })

    const readInput = (e) => {
        e.preventDefault()
        let field = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [field]: value
        })
    }
    const sendDataUser = async (e = null, googleUser = null) => {
        e && e.preventDefault();
        let loginUser = e ? user : googleUser
        if (!googleUser) {
            if (user.email === '' || user.password === '') {
                return toast.error(`All fields are required`, { position: toast.POSITION.TOP_CENTER })
            }
        }
        props.iniciarSesion(loginUser)

        setUser({ email: '', password: '' })
    }
    const responseGoogle = (response) => {
        const { email, googleId } = response.profileObj
        sendDataUser(null, { email: email, password: "a" + googleId })
    }
    return (
        <div className="container-all">
            <div className="container-form">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="email" name="email" placeholder="Your Email" value={user.email} onChange={readInput} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" value={user.password} onChange={readInput} />
                    </div>
                    <button className="btn-form solid" onClick={sendDataUser}>Sign In</button>
                    <ToastContainer />
                    <p className="social-text">Or Sign in with Google</p>
                    <GoogleLogin
                        clientId="112919868081-jrnbtckjpmehq2v64aj4rrccs2mosics.apps.googleusercontent.com"
                        buttonText="Sign Up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
            <div className="call-to-action-form">
                <div className="content">
                    <h3>Hi! New here?</h3>
                    <p>Don't have an account? please, go to Sign Up</p>
                    <Link to="/signup">
                        <button className="btn-redirect" id="sign-up-btn">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    iniciarSesion: authActions.iniciarSesion
}

export default connect(null, mapDispatchToProps)(SignIn)