import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
// class Counter extends React.PureComponent{
//     constructor(props) {
//         super(props);
//         this.state={
//             count:0
//         }
//         setInterval(()=>this.setState({count:this.state.count}),1000);
//     }
//
//     render() {
//         // toast("Component Rendered.",{position:toast.POSITION.BOTTOM_RIGHT,autoClose:2000});
//         console.log("render called",this.state.count);
//         return <h1 className={"text-center p-3 bg-dark text-warning"}>Counter: {this.state.count}</h1>
//     }
// }


class Counter extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            count:[0]
        }
        setInterval(()=>{
            this.state.count.splice(0,1,this.state.count[0]+1);
            console.log("count: ",this.state.count);
            this.setState({count : [...this.state.count]});
        },1000);
    }

    render() {
        // toast("Component Rendered.",{position:toast.POSITION.BOTTOM_RIGHT,autoClose:2000});
        console.log("render called",this.state.count);
        return <h1 className={"text-center p-3 bg-dark text-warning"}>Counter: {this.state.count[0]}</h1>
    }
}
export default Counter;