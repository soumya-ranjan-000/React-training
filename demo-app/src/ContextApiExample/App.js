import React from "react";
import ComponentAPIExample1 from "./Components/ComponentAPIExample1";
import {ComponentAPIExample2,ComponentTwo,ComponentThree }from "./Components/ComponentAPIExample2";
const App = () => {
  return <React.Fragment>
      <ComponentAPIExample1/>
      <ComponentAPIExample2>
          <ComponentTwo/>
          <ComponentThree/>
      </ComponentAPIExample2>
  </React.Fragment>;
}
export default App;