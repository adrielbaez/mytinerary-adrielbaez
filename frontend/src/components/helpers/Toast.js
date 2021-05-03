import { toast,ToastContainer } from "react-toastify";

const Toast = () => {
    return ( 
        <>  
            {toast.success('well donde')}
            <ToastContainer />
        </>
     );
}
 
export default Toast;