import {useState,useEffect} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const ChangeName = () => {
    let [fullName,setFullName]=useState({firstName:"",lastName:""})

    useEffect(()=>{
        console.log("ChangeName component mounting.")
        toast.warning("ChangeName Component mounted",{position:toast.POSITION.BOTTOM_RIGHT})

        return ()=>{
            console.log("ChangeName component hide/unmount.")
            toast.warning("ChangeName Component Unmounted",{position:toast.POSITION.BOTTOM_RIGHT})
        }

    },[]);
    useEffect(()=>{
        console.log("Firstname Changed");
        toast.error("Firstname Changed",{position:toast.POSITION.BOTTOM_RIGHT})
    },[fullName.firstName]);
    useEffect(()=>{
        console.log("Lastname Changed");
        toast.info("Lastname Changed",{position:toast.POSITION.BOTTOM_RIGHT})

    },[fullName.lastName]);

    function handleFirstNameChange(e) {
        // setFullName({firstName: e.target.value,lastName: fullName.lastName});
        setFullName({...fullName,firstName: e.target.value})

    }

    function handleLastNameChange(e) {
        // setFullName({firstName:fullName.firstName ,lastName: e.target.value})
        setFullName({...fullName,lastName: e.target.value})

    }

    return <form  className="bg-secondary text-light p-3 text-uppercase w-50">
      <div className="form-check-inline">
          <label className="form-label" htmlFor="fname">First Name: </label>
          <input onChange={handleFirstNameChange} className="input-group  rounded-1 bg-info fw-bold" type="text" id="fname"/>
      </div>
      <div className="form-check-inline">
          <label className="form-label" htmlFor="lname">Last Name: </label>
          <input onChange={handleLastNameChange} className="input-group rounded-1 bg-info fw-bold" type="text" id="lname"/>
      </div>
      <div className="form-control my-4">
          <label className="form-label" htmlFor="fullname">Full Name: </label>
          <input className="border-0 p-2 input-group bg-warning fw-bold" type="text" id="fullname" value={fullName.firstName+" "+fullName.lastName} readOnly={true}/>
      </div>
  </form>;
}
 export default ChangeName;