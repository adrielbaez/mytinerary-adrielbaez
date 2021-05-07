import {  useState } from "react";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import BoxComments from "./BoxComments";
import ContentEmpty from "./helpers/ContentEmpty";

const Comment = ({ userLogged, saveCommentDB, itinerary, deleteComment,editComment,idCity }) => {
    const [newComment, setNewComment] = useState({ comment: '', userId: '' })
    const [comments, setComments] = useState([])
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
            idMongo: e.target.id,
            userId: e.target.dataset.userid
        }
       await deleteComment( commentDelete, itinerary._id, userLogged.token)
    }
    const editCommentBtn = async (e) =>{
        e.preventDefault()
        let commentEdit = {
            newComment,
            idMongo: e.target.id,
        }
        let response = await editComment( commentEdit, itinerary._id, userLogged.token)
    }
    return (
        <>  
            <h2 className="comentarios-title">Comments</h2>
            <div className="comentarios">
                { itinerary.comments.length === 0
                    ? <ContentEmpty texto={'Todavia no hay comments'} />            
                    :itinerary.comments.length > 0
                    ? itinerary.comments.map((comment, index) =>{
                        return <BoxComments key={index} flag={flag} comment={comment} userLogged={userLogged} idItinerary={itinerary._id} deleteCommentBtn={deleteCommentBtn} editCommentBtn={editCommentBtn}  saveComment={saveComment}/>
                    })
                    : null}
            </div>
            <h2>Add a Comment</h2>
            {userLogged
                ? <form className="comment-form">
                    <div className="field-container">
                        <label>Comment</label>
                        <input onChange={saveComment} value={newComment.comment} name="comentario"></input>
                    </div>
                    <div className="field ">
                        <button onClick={sendComment} className="btn-formone solid" >Comment</button>
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
    editComment: itinerariesActions.editComment
}
export default connect(null, mapDispatchToProps)(Comment);