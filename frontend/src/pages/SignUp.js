import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', urlPicture: '', country: '' })
    const [countries, setCountries] = useState([])
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
    console.log(newUser);
    const sendDataNewUser = (e) => {
        e.preventDefault();

        setNewUser({ firstName: '', lastName: '', email: '', password: '', urlPicture: '', country: '' })
    }
    console.log(newUser);
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
                        <input type="text" name="firstName" value={newUser.firstName} placeholder="Your First Name" onChange={readDataNewUser} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="lastName" value={newUser.lastName} placeholder="Your Last Name" onChange={readDataNewUser} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" name="email" value={newUser.email} placeholder="Your Email" onChange={readDataNewUser} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="password" value={newUser.password} placeholder="Your Password" onChange={readDataNewUser} />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-image"></i>
                        <input type="text" name="urlPicture" value={newUser.urlPicture} placeholder="URL of Your Picture" onChange={readDataNewUser} />
                    </div>
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

                    <button className="btn-form solid" onClick={sendDataNewUser}>Sign In</button>
                    <p className="social-text">Or Sign in with social platforms</p>
                </form>
            </div>
        </div>
    )
}


export default SignUp