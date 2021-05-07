import axios from 'axios'
import AlertSweetRedirect from '../../components/helpers/AlertSweetRedirect';


const itinerariesActions = {
    loadItineraries: (idCity, history) => {
        return (dispatch) =>{
            axios.get(`http://localhost:4000/api/city/itineraries/${idCity}`)
            .then(response => dispatch({type: 'FETCH_ITINERARIES', payload: response.data.respuesta}))
            .catch( error =>{ 
                <AlertSweetRedirect histoty={history} />
            })
        }
    },
    loadActivities:  (idItinerary) =>{
        
        return async (dispatch) =>{
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
    loadLikes: (idItinerary, userToken) =>{

        return async (dispatch, getState) => {
            try {
                const response = await axios.put(`http://localhost:4000/api/likes/${idItinerary}`, {} , {
                    headers: {'Authorization': 'Bearer ' + userToken}
                })
                if (response) {
                    return response.data.respuesta.likes     
                }
          
            } catch (error) {
                console.log(error);
            }
        }
    },
    saveCommentDB: (comment,idItinerary, userToken)=>{
        return async (dispatch)=>{
            try {
                const response = await axios.post(`http://localhost:4000/api/comments/itinerary/${idItinerary}`, comment , {
                    headers: {'Authorization': 'Bearer ' + userToken}
                })
                // if (response) {
                //     return response.data.respuesta     
                // }
                console.log(response.data.respuesta);

                dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta })

           
            } catch (error) {
                console.log(error);
            }
        }
    },
    deleteComment: ( commentDelete, idItinerary, userToken)=>{
        return async (dispatch) =>{

            try {
                const response = await axios.put(`http://localhost:4000/api/deletecomments/itinerary/${idItinerary}`, commentDelete, {
                    headers: {'Authorization': 'Bearer ' + userToken}
                })
                dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta })
           
            } catch (error) {
                console.log(error);
            }
        }
    },
    editComment: ( commentEdit, idItinerary, userToken)=>{
        return async (dispatch) =>{
          
            try {
                const response = await axios.put(`http://localhost:4000/api/editcomments/itinerary/${idItinerary}`, commentEdit, {
                    headers: {'Authorization': 'Bearer ' + userToken}
                })
                console.log(response);
                // if (response) {
                //     return response.data.respuesta     
                // }
           
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default itinerariesActions