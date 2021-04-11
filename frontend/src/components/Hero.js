import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from 'react-router-dom'



const Hero = (props) => {
    return(
        <div className="hero d-flex flex-colum" style={{backgroundImage: `url('./assets/${props.portada}')`}}>
            <div className="contenedor-hero ">
                <div className="content-hero text-center">
                    <h1 className="tittle-hero">MyTinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <NavLink to='/cities' ><Button  color="info">Show Cities</Button>{' '}</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Hero;