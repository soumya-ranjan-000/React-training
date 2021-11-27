// eslint-disable-next-line
function Welcome(props) {
  return <h1>Hi {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="raja" />
      <Welcome name="raki" />
      <Welcome name="rakesh" />
    </div>
  );
}

export default App;
