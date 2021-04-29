const initialState ={
    userLogged: null
}

const authReducer=(state= initialState, action)=>{
    switch (action.type) {
        case 'USER_LOG':
            // localStorage.setItem('userLogged', JSON.stringify(action.payload))
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER': 
            return{
                ...state,
                userLogged: null
            }
        default:
            return state;
    }
}
export default authReducer


