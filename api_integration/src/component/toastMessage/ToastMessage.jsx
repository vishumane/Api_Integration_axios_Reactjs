import React from 'react';
import { toast } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';

toast.configure();

const CustomToast=({closeToast})=>{
    return(
        <div>
            something went wrong!
            <button onClick={closeToast}>close</button>
        </div>
    )
}


const ToastMessage=()=> {
    const notify=()=>{
       toast.success("success notification",{position:toast.POSITION.TOP_LEFT,autoClose:8000});
        toast.warn(<CustomToast/>,{position:toast.POSITION.TOP_RIGHT});
        toast.info("Info notification",{position:toast.POSITION.BOTTOM_LEFT,autoClose:8000});
        toast.error("Error notification",{position:toast.POSITION.BOTTOM_RIGHT,autoClose:8000});
    }
    return (
        <div>
            <p><b>***this is toast message***</b></p>

            <button onClick={notify}>notify</button>
        </div>
    )
}
export default ToastMessage;