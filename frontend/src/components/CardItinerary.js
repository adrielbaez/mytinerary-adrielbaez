import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const CardItinerary = ({ itinerary }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [changeNameBtn, setChangeNameBtn] = useState('View More')

    const toggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setChangeNameBtn('View Less')
            return
        }
        setChangeNameBtn('View More')
    }

    return (
        <div>
            <div className="container-itinerary">
                    <h2>{itinerary.title}</h2>
                    <div className="img-itinerary" style={{ backgroundImage: `url('/assets/${itinerary.authorPicture}')` }}></div>
                    <h3>{itinerary.authorName}</h3>
                    <div className="itinerary-details">
                        <p><span>Price:</span>{'💵'.repeat(itinerary.price)}</p>
                        <p><span>Duration:</span> {itinerary.duration} hours</p>
                    </div>
                        <p className="likes"><i className="far fa-heart heart-icon"></i> {itinerary.likes}</p>
                    <div className="hashtags">
                        {itinerary.hashtags.map((hashtag, index) => {
                            return (<p key={index}>{hashtag}</p>)
                        })}

                    </div>
                <Collapse isOpen={isOpen}>
                    <div className="container-img-contruction" style={{ backgroundImage: `url('/assets/underconstruction.png')` }}>
                    </div>
                </Collapse>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{changeNameBtn}</Button>
            </div>
        </div>
    );
}
export default CardItinerary