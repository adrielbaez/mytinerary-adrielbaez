import Swal from 'sweetalert2'

const AlertSweetRedirect = ({history}) => {
    return (
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Something went wrong!'})
            .then( ()=> {
                history.push('/error')
            })
    );
}

export default AlertSweetRedirect;