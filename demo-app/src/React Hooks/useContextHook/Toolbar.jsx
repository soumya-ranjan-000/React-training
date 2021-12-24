import {useContext} from "react";
import {ThemeContext} from "./Layout";

const Toolbar = () => {
    const {theme,mode,toggleTheme}=useContext(ThemeContext);
    return <div className="rounded-2 sticky-top d-flex p-2 my-2 justify-content-around align-items-center"
    style={{backgroundColor:theme.backgroundNavbar}}
    >
        <div className="p-2">
            <p className="h3">Toggle between Light and dark theme. By Using reactContext Hook</p>
        </div>
        <button onClick={toggleTheme} className="fw-bold mr-auto ml-auto btn btn-lg"  style={{backgroundColor:theme.buttonBackground,color:theme.buttonColor}}> {mode?"Dark":"Light"} Mode </button>
    </div>
}
export default Toolbar;