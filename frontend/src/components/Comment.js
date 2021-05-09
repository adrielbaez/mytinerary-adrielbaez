import {  useState } from "react";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
// import BoxComments from "./BoxComments";
import Swal from 'sweetalert2'
import ContentEmpty from "./helpers/ContentEmpty";

const Comment = ({ userLogged, saveCommentDB, itinerary, deleteComment,updateComment,idCity }) => {
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
        if(comment===""){
          Swal.fire({
            position: 'top',
            icon: 'warning',
            title: "You can't send an empty comment",
            showConfirmButton: false,
            timer: 1500
          })
          return false
        }
        await addComment(comment, userLogged.token, itinerary._id)
        setComment('')
      }
   
    return (
        <>  
            <h2 className="comentarios-title">Comments</h2>
            <div className=''>
                { itinerary.comments.length === 0
                    ? <ContentEmpty  texto={'Not comments'} />            
                    :itinerary.comments.length > 0
                    ? itinerary.comments.map((comment, index) =>{
                        return    <div className="inputDiv">
                        <input type="text" id="inputComment" className="inputComment" placeholder={!userLogged ? "You need to be logged to comment!" : "Leave your comment"} value={comment}disabled={!userLogged && true}onChange={(e)=>setComment(e.target.value)}/>
                        <i className="fas fa-paper-plane enter" style={{cursor: 'pointer'}} id={itinerary._id} onClick={userLogged ? sendComment :()=>Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'You must be logged to send a comment',
                        showConfirmButton: false,
                        timer: 1500
                      })}></i> 
                      </div>
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
    addComment: itinerariesActions.addComment,
    updateComment: itinerariesActions.updateComment
}
export default connect(null, mapDispatchToProps)(Comment);

 // const sendComment = async (e) => {
    //     e.preventDefault()
    //     if (Object.values(newComment).some(valor => valor ==="" )) {
    //         return alert('llena tu mensaje')
    //     }
    //     await saveCommentDB(newComment, itinerary._id, userLogged.token)
    //     setNewComment({ comment: '', userId: '' })
    // }
    // const deleteCommentBtn = async (e)=>{
    //     e.preventDefault()
    //     let commentDelete = {
    //         commentId: e.target.id,
    //         userId: e.target.dataset.userid
    //     }
    //    await deleteComment( commentDelete, itinerary._id, userLogged.token)
    // }
    // const updateOrRemoveCommentBtn = async (e) =>{
    //     e.preventDefault()
    //     let commentEdit = {
    //         ...newComment,
    //         commentId: e.target.id,
    //     }
    //     if (commentEdit.commentId === '') {
    //         return false
    //     }
    //     let response = await updateComment( commentEdit, itinerary._id, userLogged.token)
    //     setFlag(false)
    //     setNewComment({ comment: '', userId: '' })
    // }
    // let classNameComment = itinerary.comments.length === 0 ? "contenedor-vacio" :"comentarios"