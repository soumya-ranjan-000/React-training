import "./table.css";
function SongsList(props) {
  const getSongDetails = (e) => {
    let name = document.getElementById("name").value.trim();
    let title = document.getElementById("title").value.trim();
    let length = document.getElementById("length").value.trim();
    let singer = document.getElementById("singer").value.trim();
    let song = {
      movie: name,
      title: title,
      songLength: length,
      singer: singer,
    };
    console.log(song);
    props.addSong(song);
    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("length").value = "";
    document.getElementById("singer").value = "";
  };
  return (
    <main className="p-2">
      <p>Songs List</p>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Title</th>
            <th scope="col">Song Length</th>
            <th scope="col">Singer</th>
          </tr>
        </thead>
        <tbody
          className="text-dark"
          style={{ height: "30vh", display: "block", overFlow: "scroll" }}
        >
          {props.songsList.map((p) => (
            <tr>
              <td scope="row">{p.movie}</td>
              <td>{p.title}</td>
              <td>{p.songLength}</td>
              <td>{p.singer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="p-2 bg-light">
        <div className="form-group row ">
          <label className="col-sm-4 col-md-2 col-form-label">Movie Name</label>
          <div className="col-sm-6 col-md-2">
            <input type="text" className="form-control" id="name" required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-md-2 col-form-label">Song Title</label>
          <div className="col-sm-6 col-md-2">
            <input type="text" className="form-control" id="title" required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-md-2 col-form-label">
            Song Length
          </label>
          <div className="col-sm-6 col-md-2">
            <input type="text" className="form-control" id="length" required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-md-2 col-form-label">Singer</label>
          <div className="col-sm-6 col-md-2">
            <input type="text" className="form-control" id="singer" required />
          </div>
        </div>
        <div className="form-group row px-1 ml-auto mr-auto">
          <input
            type="submit"
            value="Add Song"
            className="btn btn-primary w-25"
            onClick={getSongDetails}
          />
        </div>
      </form>
    </main>
  );
}
export default SongsList;
