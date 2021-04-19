import React from 'react';
import {NavLink} from 'react-router-dom'


const Footer = ({logo}) => {
    return (  
        <footer>
            <div className="my-container-footer my-container-footer2">
                <div className=" footer">
                    <div className="d-flex flex-colum footer-info">
                        <h3>MyTinerary</h3>
                        <img className="logo" src={`/assets/${logo}`} alt="logo"/>
                    
                    </div>
                    <div className="d-flex flex-colum footer-info ">
                        <h3>Navigation</h3>
                        <NavLink exact to="/"><i className="fas fa-home" ></i>Home</NavLink>
                        <NavLink to="/cities"><i className="fas fa-map-marker-alt"></i>Cities</NavLink>
                    </div>
                    <div className="d-flex flex-colum social-media">
                        <h3 className="text-center">Social NetWorks</h3>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
                <div className="footer-copyrigth">
                    <p className="text-center">&copy; 2021 MyTynerary. All rights reserved.</p>
                </div>
        </footer>
     );
}
 
export default Footer;