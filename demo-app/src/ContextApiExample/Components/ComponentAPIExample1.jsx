import React from "react";

const Context=React.createContext({});
class ComponentAPIExample1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }


    }

    changeHandler = (e) => {
        this.setState({name: e.target.value})
        // console.log(e.target.value);
    }

    render() {
        return <>
            <p className="h1 text-center p-3 m-2 bg-light">Context API Example-1</p>
            <div className="container bg-info my-2 py-2">
                <h3>Component 1</h3>
                <label>Name: </label> <input type="text" onChange={this.changeHandler}/>
            </div>
           <Context.Provider  value={this.state.name}>
               <ComponentTwo/>
           </Context.Provider>
        </>
    }
}
class ComponentTwo extends React.Component{
    constructor(props) {
        super(props);
        this.name=null;
    }

    render() {
        return <> <div className="container bg-warning p-2">
            <h3>Component 2</h3>
            <h3>Name received from parent: <span className="text-success text-capitalize"><Context.Consumer>{name=>name}</Context.Consumer></span> </h3>
        </div>
            <ComponentThree/>
        </>;
    }
}

class ComponentThree extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div className="container bg-light p-2 my-2 text-dark border-primary border">
            <h3>Component 3</h3>
            <h3>Name received from parent: <span className="text-danger text-capitalize"><Context.Consumer>{name=>name}</Context.Consumer></span> </h3>
        </div>
    }
}
export default ComponentAPIExample1;