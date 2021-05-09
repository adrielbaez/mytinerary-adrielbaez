import { useState } from "react";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import BoxComment from "./BoxComment";
import ContentEmpty from "./helpers/ContentEmpty";
import {alert} from "./helpers/Alert";

const Comment = ({ userLogged, saveCommentDB, itinerary, addComment, idCity }) => {
    const [newComment, setNewComment] = useState({ comment: '', userId: '' })
    const [comment, setComment] = useState('')

    const saveComment = e => {
        setNewComment({
            ...newComment,
            comment: e.target.value,
            userId: userLogged.idUser,
            cityId: idCity
        })
    }
    const sendComment = async () => {
        if (comment === '') {
            alert()
            return false
        }
        await addComment(comment, userLogged.token, itinerary._id)
        setComment('')
    }
    return (
        <>
            <h2 className="comentarios-title">Comments</h2>
            <div className="comments-container">
                <div className="comments-post">
                    {itinerary.comments.length === 0
                        ? <ContentEmpty texto={'Not comments'} />
                        : itinerary.comments.map((comment, index) => {
                            return <BoxComment key={index} comment={comment} userLogged={userLogged} idItinerary={itinerary._id} idCity={idCity} />
                        })}
                </div>
                <div className="input-field-comment">
                    <input type="text"  placeholder={!userLogged ? "You need to be logged to comment!" : "Write a comment..."} value={comment} disabled={!userLogged && true} onChange={(e) => setComment(e.target.value)} />
                    <i className="fas fa-paper-plane enter" style={{ cursor: 'pointer' }} id={itinerary._id} onClick={userLogged ? sendComment : () => alert()}></i>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = {
    saveCommentDB: itinerariesActions.saveCommentDB,
    addComment: itinerariesActions.addComment,
    updateComment: itinerariesActions.updateComment
}
export default connect(null, mapDispatchToProps)(Comment);

