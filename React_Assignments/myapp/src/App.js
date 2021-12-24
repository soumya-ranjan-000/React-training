import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import About from "./Pages/About";
import Song from "./Pages/Song";
import Layout from "./Pages/Layout";
import PageNotFound from "./Components/PageNotFound.jsx";
import SongDetails from "./Components/SongDetails";
import AddSong from "./Components/AddSong";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/about" />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/songs" exact>
            <Song />
          </Route>
          <Route path="/songs/add" component={AddSong} exact />
          <Route path="/songs/:songId" component={SongDetails} exact />
          {/* <SongDetails />
          </Route> */}
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
