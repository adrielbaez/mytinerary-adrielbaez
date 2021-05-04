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
    }
}

export default itinerariesActions