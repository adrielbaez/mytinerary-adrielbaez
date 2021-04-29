import axios from 'axios'
import { toast } from 'react-toastify';

const authActions={
    createNewUser: (newUser) =>{
        return async (dispatch, getState)=>{
            let response = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if (response.data.success) {
                toast.success('welcome to family MyTinerary bro')
            }
            console.log(response.data.respuesta);
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
                toast.success(`Welcome ${response.data.respuesta.firstName}`)
            }
            dispatch({
                type:'USER_LOG',
                payload: response.data.success ? response.data.respuesta : null
            })
        }
    },
    cerrarSesion: ()=>{
        return (dispatch,getState)=>{
            dispatch({type: 'LOGOUT_USER'})
        }
    },
    iniciarSesionLS: (userLS) =>{
        return (dispatch, getState) =>{
            dispatch({type: 'USER_LOG', payload: userLS})
        }
    }
} 

export default authActions