import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const CardItinerary = ({ itinerary }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [changeNameBtn, setChangeNameBtn] = useState('View More')
    const [changeHeartIcon, setChangeHeartIcon] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setChangeNameBtn('View Less')
            return
        }
        setChangeNameBtn('View More')
    }
    let heart = !changeHeartIcon? "far fa-heart heart-icon": "fas fa-heart heart-icon"
    const changeHeart = ()=>{
        setChangeHeartIcon(!changeHeartIcon)
    }

    return (
        <div>
            <div className="container-itinerary">
                <h2>{itinerary.title}</h2>
                <div className="author">
                    <div className="img-itinerary" style={{ backgroundImage: `url('/assets/${itinerary.authorPicture}')` }}></div>
                    <h3>{itinerary.authorName}</h3>
                </div>
                <div className="itinerary-details">
                    <p><span>Price:</span>{new Array(itinerary.price).fill(0).map((elemento, index)=><i key={index} className="money-icon far fa-money-bill-alt"></i>)}</p>
                    <p className="likes" onClick={changeHeart}><i className={heart}></i> {itinerary.likes}</p>
                    <p><span>Duration:</span> {itinerary.duration} hours</p>
                </div>
               
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