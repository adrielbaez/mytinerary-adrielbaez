import React, { useState, useEffect } from 'react';
import { Collapse, Button } from 'reactstrap';
import Comment from './Comment';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import CardActivities from './CardActivities';
import { toast,ToastContainer } from "react-toastify";
import Swal from 'sweetalert2'

const CardItinerary = ({ itinerary, loadActivities, userLogged, itineraries, idCity, like, dislike}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [changeNameBtn, setChangeNameBtn] = useState('View More')
    const [activity, setActivity] = useState([])
    const [liked, setLiked] = useState('')

    useEffect(()=> {
        if(userLogged){
          setLiked(userLogged.idUser)
        }
      },[])
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
    console.log(userLogged);
    console.log(itinerary);
    console.log(itineraries);
    const addLike =()=> {
        like(itinerary._id, userLogged.token)
      }
    const dislikes =()=> {
        dislike(itinerary._id, userLogged.token)
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
                    <p className="likes">
                      {itinerary.usersLiked.includes(liked) 
                      ?<i className="fas fa-heart heart-icon" style={{cursor: 'pointer'}} onClick={userLogged && dislikes}></i>
                      :<i className="far fa-heart heart-icon" style={{cursor: 'pointer'}} onClick={userLogged ? addLike : ()=> Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'You have to be logged to like it',
                        showConfirmButton: false,
                        timer: 1500
                      })} ></i>}{itinerary.usersLiked.length}</p>
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
                        <Comment idCity={idCity} userLogged={userLogged} itinerary={itinerary} />
                    </div>
                </Collapse>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{changeNameBtn}</Button>
            </div>
        </div>
    );
}
const mapStateToProps = state =>{
    return{
        userLogged: state.authReducer.userLogged,
        itineraries: state.itinerariesReducer.intinerariesCity
    }
}
const mapDispatchToProps = {
    loadActivities: itinerariesActions.loadActivities,
    like: itinerariesActions.like,
    dislike: itinerariesActions.dislike,
    loadItineraries: itinerariesActions.loadItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(CardItinerary)

    // let heart = !likes.liked ? "far fa-heart heart-icon" : "fas fa-heart heart-icon"
    // const pressBtnLike = async () => {
    //     if (!userLogged ) {
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'error',
    //             title: 'You must be logget in to like an itinerary',
    //             showConfirmButton: false,
    //             timer: 3000
    //           })
    //         return false
    //     } 
    //     if(likes.liked === false){
    //         setlikes({
    //             count: itinerary.likes + 1,
    //             liked: true
    //         })
    //     }else {
    //         setlikes({
    //             count: itinerary.likes - 1,
    //             liked: false
    //         })
    //     }
    //     try {
    //             let respuesta = await loadLikes(itinerary._id, userLogged.token)
    //             loadItineraries(idCity, history)
    //             console.log(respuesta);                   
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }