import axios from 'axios'
import Swal from 'sweetalert2'

const citiesActions = { 
    loadCities: (history) => {
        return (dispatch, getState) =>{
            //codigo asincrono
            axios.get('http://localhost:4000/api/cities')
            .then(response => dispatch({type: 'LOAD_CITIES', payload: response.data.respuesta
            }))           
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
    searchCities:(valueInput) =>{
        return (dispatch) =>{
            dispatch({type: 'SEARCH_CITIES', payload: valueInput})
        }
    }
}
export default citiesActions