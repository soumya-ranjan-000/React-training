import React from "react";
import SongsList from "./SongList";
class AllSongs extends React.Component {
  constructor() {
    super();
    this.state = {
      songsList: [
        {
          movie: "Anurodh",
          title: "jabDardNahiTha",
          songLength: "4:50",
          singer: "Kishore",
        },
        {
          movie: "KabhiKabhi",
          title: "MePalDoPal",
          songLength: "3:45",
          singer: "Mukesh",
        },
        {
          movie: "Aradhana",
          title: "AajaTujhko",
          songLength: "4:45",
          singer: "Rafi",
        },
        {
          movie: "MungaruMale",
          title: "Anisuthidhe",
          songLength: "5:45",
          singer: "SonuNigam",
        },
      ],
    };
  }
  addSong = (song) => {
    this.setState({ songsList: [...this.state.songsList, song] });
    console.log("add song called.");
  };
  render() {
    return (
      <section>
        <div className="container-fluid py-2 px-2 border-bottom border-info bg-light">
          <p className="h6">Display Songs info using in memory JSON</p>
          <p className="h6">
            Number of songs in the playlist: {this.state.songsList.length}
          </p>
        </div>
        <div>
          <SongsList songsList={this.state.songsList} addSong={this.addSong} />
        </div>
      </section>
    );
  }
}

export default AllSongs;
