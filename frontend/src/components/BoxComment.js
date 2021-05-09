import { useState } from 'react';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Swal from 'sweetalert2'
const BoxComment = ({ comment, idItinerary, userLogged, updateCommentAction, deleteCommentAction}) => {
    const [visible, setVisible] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')

    const editComment = () => {
        setVisible(!visible)
        setUpdatedComment(comment.comment)
    }

    const commentUpdate = async () => {
        if (updatedComment === '') {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: "You can't send an empty comment",
                showConfirmButton: false,
                timer: 1500
            })
            return false
        }

        Swal.fire({
            title: 'Are you sure you want to save the changes?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6', 
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save changes!'
          }).then((result) => {
            if (result.isConfirmed) {
                updateCommentAction(updatedComment, comment._id, idItinerary, userLogged.token)
                setVisible(!visible)  
              Swal.fire(
                'Changes have been saved!',
                '',
                'success'
              )     
            }
          })
    }
    const deleteComment = () => {
        Swal.fire({
            title: 'Are you sure you want to delete this comment?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!'
          }).then((result) => {
            if (result.isConfirmed) {
            deleteCommentAction(comment._id, idItinerary, userLogged.token)  
              Swal.fire(
                'Your comment was deleted!',
                '',
                'success'
              )     
            }
          })
    }
    return (
        <div className="comment-content">
            <div className="comment">
                <div className="picture-user" style={{ backgroundImage: `url(${comment.userPicture})` }}></div>
            </div>
            {visible ?
                <>
                    <div className="input-field-comment update-cmt">
                        <input type="text" onChange={(e) => setUpdatedComment(e.target.value)} value={updatedComment} />
                        <i className="fas fa-paper-plane icon-up" onClick={commentUpdate}></i>
                    </div>
                    <div className="contenedor-icon">
                        <i className="fas fa-times-circle red icon-up" onClick={() => setVisible(!visible)}></i>
                    </div>
                </>
                : <div className="text-comment">
                    <h5>{comment.firstName}</h5>
                    <p>{comment.comment}</p>
                    {userLogged &&
                        userLogged.firstName === comment.firstName &&
                            <div className="contenedor-icon-update">
                                <i className="fas fa-edit one icon-up" onClick={editComment}></i>
                                <i className="fas fa-trash-alt icon-up"  onClick={deleteComment}></i>
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