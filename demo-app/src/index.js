// eslint-disable-next-line
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
//import App from './App';
//import App from './HelloWorld/App';
// import HelloWorld from "./HelloWorld/helloWorld";
// import Counter from "./ComponentExample/counter";
// import App from "./UserDefinedElement/UserDefinedElement";
// import App from "./ClassComponent/App";
// import App from "./WorkingWithJsonData/App";
// import App from "./workingWithJsonServer/App";
// import App from "./ReactRouterDemo/App";
// import App from "./TodoList_Flux/App";
// import App from "./Formik_/App";
// import App from "./ContextApiExample/App"
// import App from "./React Hooks/useState_Hook_and_useEffect_Hook/App"
// import App from "./React Hooks/useContextHook/App"
// import App from "./React Hooks/useRef_Hook/App"
// import App from "./React Hooks/useReducerHook/App"
// import App from "./React_Pure_Component/App"
import App from "./React Hooks/useCallback_hook/App"
ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
