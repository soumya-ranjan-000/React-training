import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Decrement = (props) => {
    // console.log(`Decrement called. Value of num2 ${props.num}`);
    toast.info(`Decrement called. Value of num2 ${props.num}`,{position:toast.POSITION.TOP_CENTER,toastId: `${props.num}`,autoClose:3000})
    return <div className={"bg-light p-4 border-warning rounded-2 shadow"}>
            <p className={"opacity-50"}>Decrement Number:</p>
            <h2 className={"text-uppercase"}>Num2: <span className={"text-primary font-monospace"}>{props.num}</span> </h2>
            <button className={"btn btn-dark my-2"} onClick={props.onClick} type="submit">Decrement</button>
    </div>;
}
// export default Decrement;
export default React.memo(Decrement);