// eslint-disable-next-line
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
//import App from './App';
//import App from './HelloWorld/App';
// import HelloWorld from "./HelloWorld/helloWorld";
// import Counter from "./ComponentExample/counter";
import App from "./UserDefinedElement/UserDefinedElement";

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals(console.log);
