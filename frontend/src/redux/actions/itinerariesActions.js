import axios from 'axios'
import Swal from 'sweetalert2'

const itinerariesActions = {
    loadItineraries: (props) => {
        return (dispatch) =>{
            axios.get(`http://localhost:4000/api/city/itineraries/${props.match.params.id}`)
            .then(response => dispatch({type: 'FETCH_ITINERARIES', payload: response.data.respuesta}))
            .catch( error =>{ 
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                  .then( ()=> {
                    props.history.push('/error')
                  })
            })
        }
    }
}

export default itinerariesActions