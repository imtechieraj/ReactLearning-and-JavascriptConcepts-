import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import LifeCycle from './Components/LifeCycle';
import ComVsPureCom from './Components/ComVsPureCom';
import ReactMemo from './Components/ReactMemo';
const menus = [
  'lifeCyclte',
  'about',
  'ComVsPureCom',
  'ReactMemo'
];

function App() {
  return (
    <Router>
      <div>
        <Header headerData={menus}/>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ReactMemo">
            <ReactMemo />
          </Route>
          <Route path="/ComVsPureCom">
            <ComVsPureCom />
          </Route>
          <Route path="/lifeCyclte">
            <LifeCycle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
