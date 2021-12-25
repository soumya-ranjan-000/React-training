import {useRef} from "react";



const Form=()=>{
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const rememberRef=useRef(null);
    const beforeSubmit=()=>{
        const cred={
            Email:emailRef.current.value,
            Password:passRef.current.value,
            Remember:rememberRef.current.checked
        }

        alert(JSON.stringify(cred));
    }
    return <section className="container-fluid vh-100 d-flex justify-content-around p-3 align-items-center bg-info">
        <form className="w-25 border-1 border p-5 bg-light rounded-2 shadow-lg" onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref={passRef} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={rememberRef} />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={beforeSubmit}>Submit</button>
        </form>
    </section>;
}
export default  Form;