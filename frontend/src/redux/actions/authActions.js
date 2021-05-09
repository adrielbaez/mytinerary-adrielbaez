import axios from 'axios'
import Swal from 'sweetalert2'

const authActions = {
    createNewUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.post('http://localhost:4000/api/user/signup', newUser)
                if (response.data.googleUser) {
                    return response.data
                }
                if (!response.data.success) {
                    return response.data.errores
                }
                dispatch({
                    type: 'USER_LOG',
                    payload: response.data.success ? response.data.respuesta : null
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    iniciarSesion: (user) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.post('http://localhost:4000/api/user/signin', user)
                if (!response.data.success) {
                    return response.data
                }
                dispatch({
                    type: 'USER_LOG',
                    payload: response.data.success ? response.data.respuesta : null
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    cerrarSesion: (history) => {
        return (dispatch, getState) => {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Sign Out!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'We will miss you!',
                    'Come back soon',
                    'success'
                  )
                  dispatch({ type: 'LOGOUT_USER' })
                  history.push('/')  
                }
              })
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
                console.log(error);
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