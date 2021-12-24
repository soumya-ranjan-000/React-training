import ChangeName from "./ChangeName";
import {useState} from "react";

const ChangeNameContainer = (props) => {
    let [visibility,setVisibility] =useState(true);
            function showBtnHandler() {
            setVisibility((prevVisibility)=>!prevVisibility);
            console.log(visibility);
        }

            return <div><div className="bg-light container-fluid  vh-100 p-3  align-items-center">
            <h1 className={"p-3 text-center  bg-secondary text-light"}>useEffect (React Hook) Example</h1>
            <button className="text-uppercase btn btn-danger btn-lg w-25 my-3" onClick={showBtnHandler}>{visibility?"Hide":"Show"}</button>
        {visibility&& <ChangeName/>}
            </div>
            <div style={{
        height:"60vh", fontSize:"26px",
        border:"dashed 3px yellow"}
        } className={"bg-dark w-25 position-fixed m-3 bottom-0 end-0 d-flex justify-content-center text-danger"}>
            <p className="font-monospace p-3">Here Shown Toast message is render by useEffect hook</p>
        </div>
    </div>
}

export  default ChangeNameContainer;