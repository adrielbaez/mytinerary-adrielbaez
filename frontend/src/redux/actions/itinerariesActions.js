import axios from 'axios'
import Swal from 'sweetalert2'

const itinerariesActions = {
    loadItineraries: (idCity, history) => {
        return (dispatch) =>{
            axios.get(`http://localhost:4000/api/city/itineraries/${idCity}`)
            .then(response => dispatch({type: 'FETCH_ITINERARIES', payload: response.data.respuesta}))
            .catch( error =>{ 
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                  .then( ()=> {
                    history.push('/error')
                  })
            })
        }
    },
    loadActivities:  (idItinerary) =>{
        
        return async (dispatch) =>{
            try {
              let respuesta = await axios.get(`http://localhost:4000/api/activities/itinerary/${idItinerary}`)
              console.log(respuesta);
              if (respuesta.data.success) {
                  return respuesta.data.respuesta
              }
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default itinerariesActions