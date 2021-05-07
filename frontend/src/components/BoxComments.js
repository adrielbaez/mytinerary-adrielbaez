// import { connect } from 'react-redux';
// import itinerariesActions from '../redux/actions/itinerariesActions';
const BoxComments = ({ comment, userLogged, saveComment, newComment, flag,setFlag,updateOrRemoveCommentBtn }) => {
    if (!userLogged) {
        return null
    }
    return (
        <>
            <div key={userLogged._id} className="comentarios-box">
                <div className="comentario">
                    <div style={{ backgroundImage: `url(${userLogged.userPicture})` }} className="profile">
                    </div>
                    <div className="text-comment">
                        {flag
                            ? (<div className="editar">
                                <input type="text" onChange={saveComment} value={newComment.comment}></input> <button onClick={updateOrRemoveCommentBtn} id={comment._id} data-userId={comment.userId} className="btn-update solid" >Update</button>
                                <button onClick={e =>setFlag(false)} id={comment._id} data-userId={comment.userId} className="btn-cancel solid" >Cancel</button>
                            </div>)
                            :<> <p className="p">{userLogged.firstName}</p> 
                            <p>{comment.comment}</p></>}
                        
                        <div className="containter-btns">
                            <button onClick={e =>setFlag(true)} id={comment._id} className="btn-comment solid" ><i class="fas fa-edit"></i></button>
                            <button onClick={updateOrRemoveCommentBtn} id={comment._id} className="btn-comment solid" ><i class="fas fa-trash"></i></button>
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