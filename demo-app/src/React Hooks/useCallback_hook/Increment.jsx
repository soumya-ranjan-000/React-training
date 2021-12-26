import React from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Increment = (props) => {
    // console.log(`Increment called. Value of num1 ${props.num}`);
    toast.dark(`Increment called. Value of num1 ${props.num}`,{position:toast.POSITION.TOP_CENTER,toastId: `${props.num}`,autoClose:3000})
    return <div className={"bg-light p-4 border-warning rounded-2 shadow"}>
            <p className={"opacity-50"}>Increment Number:</p>
            <h2 className={"text-uppercase"}>Num1: <span className={"text-primary font-monospace"}>{props.num}</span> </h2>
            <button className={"btn my-2 btn-dark"} onClick={props.onClick} type="submit">Increment</button>
        </div>;
}
// export default Increment;
export default React.memo(Increment);