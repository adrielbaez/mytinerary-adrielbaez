import { useState } from "react";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

const Comment = ({ userLogged,saveCommentDB, idItinerary }) => {
    console.log(userLogged);
    const [newComment, setNewComment]= useState({comment: '', userId: ''})

    const saveComment = e =>{
        setNewComment({
            ...newComment,
            comment: e.target.value,
            userId: userLogged.idUser
        })    
    }
    const sendComment = (e)=>{
        e.preventDefault()
        saveCommentDB(newComment,idItinerary, userLogged.token )
        setNewComment({comment: '', userId: ''})
    }
    console.log(newComment);

    return (
        <>
            <h2>Comentarios</h2>
            <div className="comentarios">
                <div className="comentario">
                    <div className="profile">
                    </div>
                    <div className="text-comment">
                        <p>hola</p>
                        <p>Escrito por:</p>

                        <form method="POST" className="eliminar-comentario">
                            <input type="hidden" name="idComentario" ></input>
                            <input type="submit" value="Eliminar" className="btn btn-azul"></input>
                        </form>
                    </div>
                </div>
            </div>
            <h2>Agrega un comentario</h2>
            {userLogged
                ? <form className="comment-form">
                    <div className="field-container">
                        <label>Comentario</label>
                        <textarea onChange={saveComment} name="comentario"></textarea>
                    </div>
                    <div className="field ">
                        <button onClick={sendComment} className="btn-form solid" >Comment</button>
                    </div>
                </form>
                : <p>Inicia Sesión para Agregar un Comentario</p>
            }
        </>
    );
}

// const mapStateToProps = state =>{
//     return{
//         userLogged: state.authReducer.userLogged
//     }
// }
const mapDispatchToProps = {
    saveCommentDB: itinerariesActions.saveCommentDB
}
export default connect(null, mapDispatchToProps)(Comment);