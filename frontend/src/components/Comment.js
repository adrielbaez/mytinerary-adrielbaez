import { useState } from "react";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import BoxComment from "./BoxComment";
import ContentEmpty from "./helpers/ContentEmpty";
import {alert} from "./helpers/Alert";
import Swal from 'sweetalert2'

const Comment = ({ userLogged, itinerary, addComment, idCity }) => {
    const [comment, setComment] = useState('')

    const sendComment = async () => {
        if (comment === '') {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: "You can't send an empty comment",
                showConfirmButton: false,
                timer: 2000
            })
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
                        ? <ContentEmpty texto={'No comments yet'} />
                        : itinerary.comments.map((comment, index) => {
                            return <BoxComment key={index} comment={comment} userLogged={userLogged} idItinerary={itinerary._id} idCity={idCity} />
                        })}
                </div>
                <div className="input-field-comment">
                    <input type="text"  placeholder={!userLogged ? "You need to be logged to comment!" : "Write a comment..."} value={comment} disabled={!userLogged && true} onChange={(e) => setComment(e.target.value)} />
                    <i className="fas fa-paper-plane enter" id={itinerary._id} onClick={userLogged ? sendComment : () => alert()}></i>
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

