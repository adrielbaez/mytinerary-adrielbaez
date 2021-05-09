import Swal from 'sweetalert2'

 
export const alert = () => {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'You must be logged to send a comment',
            showConfirmButton: false,
            timer: 1500
        })
}
// export const youSure = (confirmButton, yourFunction) =>{
//     Swal.fire({
//         title: 'Are you sure?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: confirmButton
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire(
//             'Comment delete!',
//             'Come back soon',
//             'success'
//           )
//           yourFunction()
//         }
//       })
// }
