import React from 'react';
import { Button } from 'reactstrap';

const CallToAction = ({imagenTravel}) => {
    return(
        <div className="call-to-action d-flex  my-container-small">
            
            <div className="call-content d-flex flex-colum2">
                <p>ABOUT MYTINERARY</p>
                <h2 className="flex-grow">We Provide The Best Experience for You Travel.</h2>
                <p>With age, comes wisdom. With travel, comes understanding.</p>
                <Button  color="info">Show Cities</Button>{' '}
            </div>
            <img className="travel-image" src={`./assets/${imagenTravel}`} alt="imagen travel"/>
        </div>
    );
}

export default CallToAction;