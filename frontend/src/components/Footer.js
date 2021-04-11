import React from 'react';
import {NavLink} from 'react-router-dom'


const Footer = ({logo}) => {
    return (  
        <footer>
            <div className="my-container-footer">
                <div className=" footer">
                    <div className="d-flex flex-colum footer-info">
                        <img className="logo" src={`./assets/${logo}`} alt="logo"/>
                        <p className="text-center">Find your perfect trip, designed by insiders who know and love their cities!.</p>
                    </div>
                    <div className="d-flex flex-colum footer-info ">
                        <h3>Acceso Rapido</h3>
                        <NavLink exact to="/"><i className="fas fa-home"></i>Home</NavLink>
                        <NavLink to="/cities"><i className="fas fa-map-marker-alt"></i>Cities</NavLink>
                    </div>
                    <div className="d-flex flex-colum social-media">
                        <h3>Social Media</h3>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                </div>
            </div>
                <div className="footer-copyrigth">
                    <p className="text-center">&copy; 2021 MyTynerary. Designed by Adriel Baez. All rights reserved.</p>
                </div>
        </footer>
     );
}
 
export default Footer;