import axios from 'axios'
import Swal from 'sweetalert2'


const itinerariesActions = {
    loadItineraries: (idCity, history) => {
        return (dispatch) => {
            axios.get(`https://mytinerary-adriel.herokuapp.com/api/city/itineraries/${idCity}`)
                .then(response => dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta }))
                .catch(error => {
                   console.log(error);
                })
        }
    },
    loadActivities: (idItinerary) => {

        return async (dispatch) => {
            try {
                const respuesta = await axios.get(`https://mytinerary-adriel.herokuapp.com/api/activities/itinerary/${idItinerary}`)
                if (respuesta.data.success) {
                    return respuesta.data.respuesta
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    loadLikes: (idItinerary, userToken) => {

        return async (dispatch, getState) => {
            try {
                const response = await axios.put(`https://mytinerary-adriel.herokuapp.com/api/likes/${idItinerary}`, {}, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                if (response) {
                    return response.data.respuesta.likes
                }

            } catch (error) {
                console.log(error);
            }
        }
    },
    like: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/likes', { id, token }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({ type: 'LIKE_ITINERARY', payload: response.data.respuesta })
            } catch (error) {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Oops something went wrong, try again later!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    },

    dislike: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/dislike', { token, id }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                dispatch({ type: 'LIKE_ITINERARY', payload: response.data.respuesta })
            } catch (error) {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Oops something went wrong, try again later!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    },
    addComment: (comment, token, idItinerary) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/comments', {comment, token, idItinerary} , {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'COMMENT', payload: response.data.respuesta})
          }catch(error){
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Oops something went wrong, try again later!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      },
      updateComment: (comment, idComment, idItinerary, token) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.put('https://mytinerary-adriel.herokuapp.com/api/comments/update', {comment, idComment, idItinerary, token}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'COMMENT', payload: response.data.respuesta})
          }
          catch(error){
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Oops something went wrong, try again later!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      },
    
      deleteComment: (idComment, idItinerary, token) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.put('https://mytinerary-adriel.herokuapp.com/api/comments', {idComment, idItinerary, token}, {
              headers: {
                Authorization: 'Bearer '+ token
              }
            })
            dispatch({type: 'COMMENT', payload: response.data.respuesta})
          }
          catch(error){
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Oops something went wrong, try again later!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      },
    saveCommentDB: (comment, idItinerary, userToken) => {
        return async (dispatch) => {
            try {
                const response = await axios.post(`https://mytinerary-adriel.herokuapp.com/api/comments/itinerary/${idItinerary}`, comment, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })

                dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta })


            } catch (error) {
                console.log(error);
            }
        }
    }
    
}

export default itinerariesActions

// updateComment: (commentEdit, idItinerary, userToken) => {
//     return async (dispatch) => {

//         try {
//             const response = await axios.put(`https://mytinerary-adriel.herokuapp.com/api/editcomments/itinerary/${idItinerary}`, commentEdit, {
//                 headers: { 'Authorization': 'Bearer ' + userToken }
//             })
//             dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }