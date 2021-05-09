import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from 'react-google-login';


const SignUp = (props) => {

    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', userPicture: '', country: '' })
    const [countries, setCountries] = useState([])
    const [mensajeError, setMensajeError] = useState({ success: false, mensaje: '' })
    const [errores, setErrores] = useState({ firstName: '', lastName: '', email: '', password: '', userPicture: '' })
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => setCountries(response.data))
    }, [])

    const readDataNewUser = (e) => {
        let field = e.target.name;
        let value = e.target.value;

        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const sendDataNewUser = async (e = null, googleUser = null) => {
        e && e.preventDefault();
        let user = e ? newUser : googleUser
        if (!googleUser) {
            //evaluo si mi objeto user tiene campos vacios
            if (Object.values(user).some(valor => valor ==="" )) {
                setMensajeError({ success: true, mensaje: 'All fields are required' })
                return false;
            }
        }
        setMensajeError({ ...mensajeError, success: false })
        let response = await props.createNewUser({ ...user, firstName: user.firstName.trim(), lastName: user.lastName.trim() })
        if (response) {
            if (response.googleUser) {
                return toast.error(response.respuesta)
            }
            setErrores({ firstName: '', lastName: '', email: '', password: '', userPicture: '' })
            if (!response.success) {
                response.details.map(error => {
                    return setErrores((erroresAnteriores) => {
                        return { ...erroresAnteriores, [error.context.label]: error.message }
                    })
                })
            }
        }
    }

    const responseGoogle = (response) => {
        const { givenName, email, googleId, imageUrl, familyName } = response.profileObj
        sendDataNewUser(null, { firstName: givenName, lastName: familyName, email: email, password: "a" + googleId, userPicture: imageUrl, country: 'Argentina' })
    }
    return (
        <div className="container-all">
            <div className="call-to-action-form">
                <div className="content">
                    <h3>One of us?</h3>
                    <p>You have an account? please, go to Sign In</p>
                    <Link to="/signin">
                        <button className="btn-redirect" id="sign-up-btn">Sign In</button>
                    </Link>
                </div>
            </div>
            <div className="container-form">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign Up</h2>
                    {mensajeError.success
                        ? (
                            <div className="mensaje-error">{mensajeError.mensaje}</div>
                        )
                        : null}
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="firstName" value={newUser.firstName} placeholder="Your First Name" onChange={readDataNewUser} />
                    </div>
                    {errores.firstName !== '' ? (<div className="mensaje-error-signup">{errores.firstName}</div>) : null}
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="lastName" value={newUser.lastName} placeholder="Your Last Name" onChange={readDataNewUser} />
                    </div>
                    {errores.lastName !== '' ? (<div className="mensaje-error-signup">{errores.lastName}</div>) : null}
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" name="email" value={newUser.email} placeholder="Your Email" onChange={readDataNewUser} />
                    </div>
                    {errores.email !== '' ? (<div className="mensaje-error-signup">{errores.email}</div>) : null}
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="password" value={newUser.password} placeholder="Your Password" onChange={readDataNewUser} />
                    </div>
                    {errores.password !== '' ? (<div className="mensaje-error-signup">{errores.password}</div>) : null}
                    <div className="input-field">
                        <i className="fas fa-image"></i>
                        <input type="text" name="userPicture" value={newUser.userPicture} placeholder="URL of Your Picture" onChange={readDataNewUser} />
                    </div>
                    {errores.userPicture !== '' ? (<div className="mensaje-error-signup">{errores.userPicture}</div>) : null}
                    <div className="input-field">
                        <i className="fas fa-globe-americas"></i>
                        <select name="country" onChange={readDataNewUser} value={newUser.country}>
                            <option value="" >Choose Your Country</option>
                            {countries.length === 0
                                ? <option>not country</option>
                                : countries.map((country, index) => {
                                    return (<option key={index} value={country.name}>{country.name}</option>)
                                })}
                        </select>
                    </div>

                    <button className="btn-form solid" onClick={sendDataNewUser}>Sign Up</button>
                    <ToastContainer />
                    <p className="social-text">Or</p>
                    <GoogleLogin
                        className="btn-google"
                        clientId="112919868081-jrnbtckjpmehq2v64aj4rrccs2mosics.apps.googleusercontent.com"
                        buttonText="Sign Up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        infoStatusUser: state.authReducer.userLogged
    }
}
const mapdispatchtoProps = {
    createNewUser: authActions.createNewUser
}

export default connect(mapStateToProps, mapdispatchtoProps)(SignUp)