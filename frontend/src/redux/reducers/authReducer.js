const initialState = {
    userLogged: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOG':
            if (action.payload) {
                localStorage.setItem('userLogged', JSON.stringify({ firstName: action.payload.firstName, idUser: action.payload.idUser, userPicture: action.payload.userPicture }))
                localStorage.setItem('token', action.payload.token)
            }
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER':
            localStorage.clear()
            return {
                ...state,
                userLogged: null
            }
        default:
            return state;
    }
}
export default authReducer


