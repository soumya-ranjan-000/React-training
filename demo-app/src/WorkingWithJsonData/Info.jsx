import React from "react";
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: [
        {
          name: "Rohit Sharma",
          jersy: 45,
        },
        {
          name: "Shubman Gill",
          jersy: 77,
        },
        {
          name: "Cheteshwar Pujara",
          jersy: 25,
        },
        {
          name: "Virat Kohli",
          jersy: 18,
        },
        {
          name: "Ajinkya Rahane",
          jersy: 27,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <main className="my-5 w-50 border">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Jersy No</th>
              </tr>
            </thead>
            <tbody className="text-dark">
              {this.state.playerList.map((p) => (
                <tr>
                  <td scope="row">{p.name}</td>
                  <td>{p.jersy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="container border bg-light">
            <div className="my-4 text-center">
              <input
                id="name"
                className="m-2"
                type="text"
                placeholder="Enter Name.."
                onFocus={(e) => {
                  e.target.value = "";
                }}
              />
              <input
                id="jersy"
                className="m-2"
                type="text"
                placeholder="Enter Jersy No.."
                onFocus={(e) => {
                  e.target.value = "";
                }}
              />
            </div>
            <div className="my-4 text-center">
              <button onClick={this.addPlayer} className="btn btn-primary btn">
                Add Player
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
  addPlayer = () => {
    const name = document.getElementById("name").value;
    const jersy = document.getElementById("jersy").value;
    const player = {
      name: name,
      jersy: jersy,
    };
    // this.state.playerList.push(player);
    console.log(name, jersy);
    this.setState({ playerList: [...this.state.playerList, player] });
  };
}

export default Info;
