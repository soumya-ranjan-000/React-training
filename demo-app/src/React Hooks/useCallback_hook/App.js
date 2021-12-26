import Increment from "./Increment";
import Decrement from "./Decrement";
import {useState,useCallback} from "react";
import {ToastContainer} from 'react-toastify';
const App=()=>{
    const [num1,setNum1]=useState(10000);
    const [num2,setNum2]=useState(99999);
    // const increment=()=> setNum1(num1+1);
    // const decrement= ()=>setNum2(num2-1);

    const increment=useCallback(()=>{
        console.log("increment usecallback called");
        setNum1(num1+1)},[num1]);
    const decrement=useCallback(()=>{
        console.log("decrement usecallback called");
        setNum2(num2-1)
    },[num2]);

    return <section className={"bg-warning vh-100 d-flex justify-content-evenly align-items-center" }>
  <Increment onClick={increment} num={num1}/>
      <div className="bg-dark vh-100">|</div>
      <Decrement onClick={decrement} num={num2}/>

    </section>
}
export default App;