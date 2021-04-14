import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from 'react-router-dom'

const CallToAction = ({imagenTravel}) => {
    return(
        <div className="call-to-action d-flex flex-colum my-container-small">
            
            <div className="call-content d-flex flex-colum2">
                <p>LOOKING FOR ITINERARIES?</p>
                <h2 className="flex-grow">We Provide The Best Experience For You.</h2>
                <p>With age, comes wisdom. With travel, comes understanding</p>
                <NavLink to='/cities' ><Button  color="info">Show Cities</Button>{' '}</NavLink>
            </div>
            <img className="travel-image" src={`./assets/${imagenTravel}`} alt="imagen travel"/>
        </div>
    );
}

export default CallToAction;