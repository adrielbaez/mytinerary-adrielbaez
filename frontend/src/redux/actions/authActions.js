import axios from 'axios'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const authActions = {
    createNewUser: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if (response.data.success) {
                toast.success('welcome to family MyTinerary bro')
            }
            if (!response.data.success) {
                return response.data.errores
            }
            dispatch({
                type: 'USER_LOG',
                payload: response.data.success ? response.data.respuesta : null
            })
        }
    },
    iniciarSesion: (user) => {
        return async (dispatch, getState) => {
            let response = await axios.post('http://localhost:4000/api/user/signin', user)
            if (!response.data.success) {
                return response.data
            }
            if (response.data.success) {
                toast.success(`Welcome ${response.data.respuesta.firstName}`)
            }
            dispatch({
                type: 'USER_LOG',
                payload: response.data.success ? response.data.respuesta : null
            })
        }
    },
    cerrarSesion: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'LOGOUT_USER' })
        }
    },
    iniciarSesionLS: (userLS) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/logingLS', {
                    headers: {
                        'Authorization': 'Bearer ' + userLS.token
                    }
                })
                dispatch({
                    type: 'USER_LOG', payload: {
                        ...response.data.respuesta,
                        token: userLS.token
                    }
                })
            } catch (error) {
                if (error.response.status === 401) {
                    Swal.fire({
                        title: 'No no no...Maybe another day',
                        width: 600,
                        padding: '3em',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/assets/giphy.webp")
                          left top
                          no-repeat
                        `
                    })
                }
            }

        }
    }
}

export default authActions