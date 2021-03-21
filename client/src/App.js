import React from "react";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>

      <Route exact path='/' component={Search}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/saved' component={Saved}/>
      <Route component={NoMatch} />
       
      </Switch>
      </div>
    </Router>
  
  );
}

export default App;

