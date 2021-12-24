import React from "react";

const Context=React.createContext({});
export class ComponentAPIExample2 extends React.Component {

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
            <p className="h1 text-center p-3 m-2 bg-light">Context API Example-2</p>
            <div className="container bg-info my-2 py-2">
                <h3>Component 1</h3>
                <label>Name: </label> <input type="text" onChange={this.changeHandler} value={this.state.name}/>
            </div>
           <Context.Provider  value={{name:this.state.name,changeName:(name) =>this.setState({name:name})}}>
               {this.props.children}
           </Context.Provider>
        </>
    }
}
export class ComponentTwo extends React.Component{
    constructor(props) {
        super(props);
        this.name=null;
    }

    render() {
        return <> <div className="container bg-warning p-2">
            <h3>Component 2</h3>
            <h3>Name received from parent: <span className="text-success text-capitalize"><Context.Consumer>{ob=>ob.name}</Context.Consumer></span> </h3>
        </div>
        </>;
    }
}

export class ComponentThree extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div className="container bg-light p-2 my-2 text-dark border-primary border">
            <h3>Component 3</h3>
            <Context.Consumer>{
               (value) => (
                   <>
                   <h3>Name received from parent: <span className="text-danger text-capitalize"> {value.name} </span> </h3>
                <label className="form-label">Change Name here: </label><input className="input-group-text bg-primary text-light" type="text" value={value.name} onChange={(e) => {
                  value.changeName(e.target.value)
                }} /></>
               )
            }
            </Context.Consumer>
        </div>
    }
}
