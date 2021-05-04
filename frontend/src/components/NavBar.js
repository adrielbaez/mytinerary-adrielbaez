import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';

const NavBar = (props) => {
    const [click, setClick] = useState(false);
    let picture = props.userLogged ? `${props.userLogged.userPicture}` : '/assets/userIcon.png'

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img className="logo" src={`/assets/logo.png`} alt="logo" />
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/cities" activeClassName="active" className="nav-links" onClick={handleClick}>Cities</NavLink>
                        </li>
                        {!props.userLogged
                            &&
                            <>
                                <li className="nav-item">
                                    <NavLink exact to="/signin" activeClassName="active" className="nav-links" onClick={handleClick}>Sign In</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/signup" activeClassName="active" className="nav-links" onClick={handleClick}>Sign Up</NavLink>
                                </li>
                            </>}

                        <li className="nav-item">
                            <NavLink exact to="#" activeClassName="active" className="nav-links" onClick={handleClick}> <div className="userPicture" style={{ backgroundImage: `url(${picture})` }}></div></NavLink>
                        </li>
                        {props.userLogged &&
                            <>
                                <li className="nav-item">
                                    <NavLink exact to="#" activeClassName="active" className="nav-links"><h3 className='signout' onClick={props.cerrarSesion}>Sign Out</h3></NavLink>
                                </li>
                            </>}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}
const mapDispatchToProps = {
    cerrarSesion: authActions.cerrarSesion
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
