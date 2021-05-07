import {  useState } from "react";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import BoxComments from "./BoxComments";
import ContentEmpty from "./helpers/ContentEmpty";

const Comment = ({ userLogged, saveCommentDB, itinerary, deleteComment,updateComment,idCity }) => {
    const [newComment, setNewComment] = useState({ comment: '', userId: '' })
    const [flag, setFlag] = useState(false)

    const saveComment = e => {
        setNewComment({
            ...newComment,
            comment: e.target.value,
            userId: userLogged.idUser,
            cityId: idCity
        })
    }

    const sendComment = async (e) => {
        e.preventDefault()
        if (Object.values(newComment).some(valor => valor ==="" )) {
            return alert('llena tu mensaje')
        }
        await saveCommentDB(newComment, itinerary._id, userLogged.token)
        setNewComment({ comment: '', userId: '' })
    }
    const deleteCommentBtn = async (e)=>{
        e.preventDefault()
        let commentDelete = {
            commentId: e.target.id,
            userId: e.target.dataset.userid
        }
       await deleteComment( commentDelete, itinerary._id, userLogged.token)
    }
    const updateOrRemoveCommentBtn = async (e) =>{
        e.preventDefault()
        let commentEdit = {
            ...newComment,
            commentId: e.target.id,
        }
        if (commentEdit.commentId === '') {
            return false
        }
        let response = await updateComment( commentEdit, itinerary._id, userLogged.token)
        setFlag(false)
        setNewComment({ comment: '', userId: '' })
    }
    let classNameComment = itinerary.comments.length === 0 ? "contenedor-vacio" :"comentarios"
    return (
        <>  
            <h2 className="comentarios-title">Comments</h2>
            <div className={classNameComment}>
                { itinerary.comments.length === 0
                    ? <ContentEmpty  texto={'Not comments'} />            
                    :itinerary.comments.length > 0
                    ? itinerary.comments.map((comment, index) =>{
                        return <BoxComments key={index} flag={flag} setFlag={setFlag} comment={comment} userLogged={userLogged} idItinerary={itinerary._id} deleteCommentBtn={deleteCommentBtn} updateOrRemoveCommentBtn={updateOrRemoveCommentBtn}  saveComment={saveComment }newComment={newComment} />
                    })
                    : null}
            </div>
            {userLogged
                ? <form className="comment-form">
                    <div className="field-container">
                        <input onChange={saveComment} value={newComment.comment} name="comentario"></input>
                    </div>
                    <div className="field ">
                        <button onClick={sendComment} className="btn-formone solid" ><i class="fas fa-location-arrow"></i></button>
                    </div>
                </form>
                : <p>Inicia Sesión para Agregar un Comentario</p>
            }
        </>
    );
}

// const mapStateToProps = state =>{
//     return{
//         itineraries: state.itinerariesReducer.intinerariesCity
//     }
// }
const mapDispatchToProps = {
    saveCommentDB: itinerariesActions.saveCommentDB,
    deleteComment: itinerariesActions.deleteComment,
    updateComment: itinerariesActions.updateComment
}
export default connect(null, mapDispatchToProps)(Comment);