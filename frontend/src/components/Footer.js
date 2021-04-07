import React from 'react';


const Footer = () => {
    return ( 
        <footer>
            <div className="my-container-footer">
                <div className="d-flex flex-colum footer">
                    <div className="d-flex flex-colum footer-info">
                        <p>Logo</p>
                        <p className="text-center">Find your perfect trip, designed by insiders who know and love their cities!.</p>
                    </div>
                    <div className="d-flex flex-colum footer-info">
                        <h3>Acceso Rapido</h3>
                        <p>link1</p>
                        <p>link1</p>
                        <p>link1</p>
                    </div>
                    <div className="d-flex flex-colum footer-info">
                        <h3>Contact</h3>
                        <p>link1</p>
                        <p>link1</p>
                        <p>link1</p>
                    </div>
                </div>
                <div className="footer-copyrigth d-flex flex-center-sb">
                    <p>&copy; 2021 MyTynerary. Designed by Adriel Baez. All rights reserved.</p>
                    <div className="social-media">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;