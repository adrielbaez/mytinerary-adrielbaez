import axios from 'axios'
import Swal from 'sweetalert2'


const itinerariesActions = {
    loadItineraries: (idCity, history) => {
        return (dispatch) => {
            axios.get(`http://localhost:4000/api/city/itineraries/${idCity}`)
                .then(response => dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta }))
                .catch(error => {
                    // <AlertSweetRedirect histoty={history} />
                })
        }
    },
    loadActivities: (idItinerary) => {

        return async (dispatch) => {
            try {
                let respuesta = await axios.get(`http://localhost:4000/api/activities/itinerary/${idItinerary}`)
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
                const response = await axios.put(`http://localhost:4000/api/likes/${idItinerary}`, {}, {
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
                const response = await axios.post('http://localhost:4000/api/likes', { id, token }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response.data.respuesta)
                dispatch({ type: 'LIKE_ITINERARY', payload: response.data.respuesta })
            } catch (error) {
                console.log(error);
                // Swal.fire({
                //     position: 'top',
                //     icon: 'error',
                //     title: 'Oops something went wrong, try again later!',
                //     showConfirmButton: false,
                //     timer: 1500
                // })
            }
        }
    },

    dislike: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/dislike', { token, id }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                console.log(response.data.respuesta)
                dispatch({ type: 'LIKE_ITINERARY', payload: response.data.respuesta })
            } catch (error) {
                console.log(error);
                // Swal.fire({
                //     position: 'top',
                //     icon: 'error',
                //     title: 'Oops something went wrong, try again later!',
                //     showConfirmButton: false,
                //     timer: 1500
                // })
            }
        }
    },
    saveCommentDB: (comment, idItinerary, userToken) => {
        return async (dispatch) => {
            try {
                const response = await axios.post(`http://localhost:4000/api/comments/itinerary/${idItinerary}`, comment, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })

                console.log(response.data.respuesta);

                dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta })


            } catch (error) {
                console.log(error);
            }
        }
    },
    updateComment: (commentEdit, idItinerary, userToken) => {
        return async (dispatch) => {

            try {
                const response = await axios.put(`http://localhost:4000/api/editcomments/itinerary/${idItinerary}`, commentEdit, {
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