import { useState } from 'react';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import {alert} from './helpers/Alert';
const BoxComment = ({ comment, idItinerary, idCity, userLogged, updateCommentAction, deleteCommentAction }) => {
    const [visible, setVisible] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')

    const editComment = () => {
        setVisible(!visible)
        setUpdatedComment(comment.comment)
    }

    const commentUpdate = async () => {
        if (updatedComment === '') {
           alert()
            return false
        }
        await updateCommentAction(updatedComment, comment._id, idItinerary, userLogged.token)
        setVisible(!visible)
    }
    console.log(comment);
    const deleteComment = async () => {
        
        await deleteCommentAction(comment._id, idItinerary, userLogged.token)
    }
    return (
        <div className="comment-content">
            <div className="comment">
                <div className="picture-user" style={{ backgroundImage: `url(${comment.userPicture})` }}></div>
            </div>
            {visible ?
                <>
                    <div className="input-field-comment update-cmt">
                        <input type="text" className="inputModif" onChange={(e) => setUpdatedComment(e.target.value)} value={updatedComment} style={{ borderRadius: '30px', border: 'none', outline: 'none', textAlign: 'center' }} />
                        <i class="fas fa-paper-plane " style={{ cursor: 'pointer', marginLeft: '0.5rem' }} onClick={commentUpdate}></i>
                    </div>
                    <div className="contenedor-icon">
                        <i class="fas fa-times-circle red" style={{ cursor: 'pointer', marginLeft: '0.5rem' }} onClick={() => setVisible(!visible)}></i>
                    </div>
                </>
                : <div className="text-comment">
                    <h5>{comment.firstName}</h5>
                    <p>{comment.comment}</p>
                    {userLogged.firstName === comment.firstName &&
                        <div className="contenedor-icon-update">
                            <i class="fas fa-edit one" style={{ marginRight: '0.4rem', cursor: 'pointer' }} onClick={editComment}></i>
                            <i class="fas fa-trash-alt" style={{ cursor: 'pointer' }} onClick={deleteComment}></i>
                        </div>
                    }
                </div>
            }
        </div>
    );
}
const mapDispatchToProps = {
    deleteCommentAction: itinerariesActions.deleteComment,
    updateCommentAction: itinerariesActions.updateComment
}

export default connect(null, mapDispatchToProps)(BoxComment);