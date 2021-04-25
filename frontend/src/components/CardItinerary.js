import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const CardItinerary = ({itinerary}) => {
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
                <div className="img-itinerary" style={{ backgroundImage: `url('https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528')` }}></div>
                <h3>{itinerary.authorName}</h3>
                <div className="itinerary-details">
                    <p>Price:{'💵'.repeat(itinerary.price)}</p>
                    <p>Duration: {itinerary.duration} hours</p>
                    <p>Likes: {itinerary.likes}</p>
                </div>
                <div className="hashtags">
                    {itinerary.hashtags.map((hashtag, index) => {
                        return (<p key={index}>{hashtag}</p>)
                    })}

                </div>
                <Collapse isOpen={isOpen}>
                        <div className="container-itinerary-small">
                            <h2>Under Construction</h2>
                        </div>
                </Collapse>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{changeNameBtn}</Button>
            </div>
        </div>    
  );
}
export default CardItinerary