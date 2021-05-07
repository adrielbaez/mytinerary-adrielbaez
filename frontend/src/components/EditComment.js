const EditComment = ({saveComment,updateOrRemoveCommentBtn, commentEdited, comment,setFlag}) => {
    return (
        (<div className="editar">
            <input type="text" onChange={saveComment} value={commentEdited.comment}></input> <button onClick={updateOrRemoveCommentBtn} id={comment._id} data-userId={comment.userId} className="btn-update solid" >Update</button>
            <button onClick={e => setFlag(false)} id={comment._id} data-userId={comment.userId} className="btn-cancel solid" >Cancel</button>
        </div>)
    );
}

export default EditComment;