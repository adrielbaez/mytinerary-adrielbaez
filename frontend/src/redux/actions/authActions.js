import axios from 'axios'
import { toast } from 'react-toastify';



const authActions={
    createNewUser: (newUser) =>{
        return async (dispatch, getState)=>{
            let response = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if (response.data.success) {
                toast.success('welcome to family MyTinerary bro')
            }
            dispatch({
                type:'USER_LOG',
                payload: response.data.success ? response.data.respuesta : null
            })

        }
    },
    iniciarSesion: (user)=>{
        return async (dispatch, getState)=>{
            let response = await axios.post('http://localhost:4000/api/user/signin', user)
            if (response.data.success) {
                toast.success('welcome bro')
            }
            dispatch({
                type:'USER_LOG',
                payload: response.data.success ? response.data : null
            })
        }
    },
    cerrarSesion: ()=>{
        return (dispatch,getState)=>{
            dispatch({type: 'LOGOUT_USER'})
        }
    }
} 

export default authActions