import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state >0 ? state - 1 : state;
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
};

const App = () => {
    // Initialising useReducer hook
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <section className={"container-fluid d-flex justify-content-center align-items-center vh-100 bg-warning"}>
            <h1 className="position-absolute top-0 start-50 translate-middle-x p-3 bg-light my-2">UseReducer Example</h1>
            <div className="bg-light p-5 shadow">
                <h2 className={"text-center bg-info d-block rounded-2 py-2 shadow"}>{count}</h2>
                <button className={"btn btn-dark btn-lg m-2 text-light shadow"} onClick={() => dispatch("add")}>
                    ➕
                </button>
                <button className={"btn btn-dark btn-lg m-2 text-light shadow"} onClick={() => dispatch("subtract")}>
                    ➖
                </button>
                <button className={"btn btn-dark btn-lg m-2 text-light shadow"} onClick={() => dispatch("reset")}>
                    Reset
                </button>
            </div>
        </section>

    );
};

export default App;
