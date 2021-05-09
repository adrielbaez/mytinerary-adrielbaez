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
// export const alertYouSure = (title) => { Swal.fire({
//     title: title,
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, Save changes!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//         updateCommentAction(updatedComment, comment._id, idItinerary, userLogged.token)
//         setVisible(!visible)  
//       Swal.fire(
//         'Changes have been saved!',
//         '',
//         'success'
//       )     
//     }
//   })
// }