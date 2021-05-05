import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';
import Comment from './Comment';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import CardActivities from './CardActivities';
import { toast,ToastContainer } from "react-toastify";

const CardItinerary = ({ itinerary, loadActivities, userLogged, loadLikes }) => {
console.log(userLogged);
console.log(loadLikes);

    const [isOpen, setIsOpen] = useState(false);
    const [changeNameBtn, setChangeNameBtn] = useState('View More')
    const [changeHeartIcon, setChangeHeartIcon] = useState(false)
    const [activity, setActivity] = useState([])

    const toggle = async () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setChangeNameBtn('View Less')
            let respuesta = await loadActivities(itinerary._id)
            setActivity(respuesta)
            return false
        }
        setChangeNameBtn('View More')
    }
    let heart = !changeHeartIcon ? "far fa-heart heart-icon" : "fas fa-heart heart-icon"
    const pressBtnLike = async () => {
        if (!userLogged) {
            toast.error('necesitas loguearte')
            return false;
        } 
        try {
            let respuesta = await loadLikes(itinerary._id, userLogged.token)
        } catch (error) {
            
        }
        setChangeHeartIcon(!changeHeartIcon)

    }
    return (
        <div>
            <ToastContainer />
            <div className="container-itinerary">
                <h2>{itinerary.title}</h2>
                <div className="author">
                    <div className="img-itinerary" style={{ backgroundImage: `url('/assets/${itinerary.authorPicture}')` }}></div>
                    <h3>{itinerary.authorName}</h3>
                </div>
                <div className="itinerary-details">
                    <p><span>Price:</span>{new Array(itinerary.price).fill(0).map((elemento, index) => <i key={index} className="money-icon far fa-money-bill-alt"></i>)}</p>
                    <p className="likes" onClick={pressBtnLike}><i className={heart}></i> {itinerary.likes}</p>
                    <p><span>Duration:</span> {itinerary.duration} hours</p>
                </div>

                <div className="hashtags">
                    {itinerary.hashtags.map((hashtag, index) => {
                        return (<p key={index}>{hashtag}</p>)
                    })}

                </div>
                <Collapse isOpen={isOpen}>
                    <div className="contenedor-section-hidden">
                        <CardActivities activity={activity} />
                        <Comment />
                    </div>
                </Collapse>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{changeNameBtn}</Button>
            </div>
        </div>
    );
}
const mapStateToProps = state =>{
    return{
        userLogged: state.authReducer.userLogged
    }
}
const mapDispatchToProps = {
    loadActivities: itinerariesActions.loadActivities,
    loadLikes: itinerariesActions.loadLikes
}
export default connect(mapStateToProps, mapDispatchToProps)(CardItinerary)