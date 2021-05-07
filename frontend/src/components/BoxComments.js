// import { connect } from 'react-redux';
// import itinerariesActions from '../redux/actions/itinerariesActions';
const BoxComments = ({ comment, userLogged, saveComment, deleteCommentBtn, editCommentBtn, flag }) => {

    return (
        <>
            <div key={userLogged._id} className="comentarios-box">
                <div className="comentario">
                    <div style={{ backgroundImage: `url(${userLogged.userPicture})` }} className="profile">
                    </div>
                    <div className="text-comment">
                        {flag
                            ? (<div className="editar">
                                <input type="text" onChange={saveComment}></input> <button onClick={editCommentBtn} id={comment._id} data-userId={comment.userId} className="btn-update solid" >Update Comment</button>
                            </div>)
                            :<> <p className="p">{userLogged.firstName}</p> 
                            <p>{comment.comment}</p></>}
                        
                        <div className="containter-btns">
                            <button onClick={editCommentBtn} id={comment._id} data-userId={comment.userId} className="btn-comment solid" ><i class="fas fa-edit"></i></button>
                            <button onClick={deleteCommentBtn} id={comment._id} data-userId={comment.userId} className="btn-comment solid" ><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// const mapStateToProps = state =>{
//     return{
//         userLogged: state.authReducer.userLogged
//     }
// }
// const mapDispatchToProps = {
//     saveCommentDB: itinerariesActions.saveCommentDB,

// }
export default BoxComments;