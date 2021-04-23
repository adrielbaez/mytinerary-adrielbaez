import axios from 'axios'

const itinerariesActions = {
    loadItineraries: (id) => {
        return (dispatch) =>{
            axios.get(`http://localhost:4000/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'FETCH_ITINERARIES', payload: response.data.respuesta}))
        }
    }
}

export default itinerariesActions