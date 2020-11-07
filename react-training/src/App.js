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
import AjaxCall from './Components/AjaxCall';
import Fragments from './Components/Fragments';
import PropTypes from './Components/PropTypes';
import EventHandling from './Components/EventHandling';
import HocExample from './Components/Hoc/HocExample';
import ReactRef from './Components/ReactRef';
import ChildToParent from './Components/ChildToParent';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ReduxExample from './Components/Redux/';
import Redux2 from './Components/Redux2';

const menus = [
  'lifeCyclte',
  'about',
  'ComVsPureCom',
  'ReactMemo',
  'ajaxCall',
  'Fragments',
  'PropTypes',
  'EventHandling',
  'HocExample',
  'ReactRef',
  'ChildToParent',
  'ErrorBoundary',
  'Redux',
  'Redux2'
];

function App() {
  return (
    <Router>
      <div>
        <Header headerData={menus} />
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
          <Route path="/ajaxCall">
            <AjaxCall />
          </Route>
          <Route path="/Fragments">
            <Fragments />
          </Route>
          <Route path="/PropTypes">
            <PropTypes />
          </Route>
          <Route path="/EventHandling">
            <EventHandling />
          </Route>
          <Route path="/HocExample">
            <HocExample />
          </Route>
          <Route path="/ReactRef">
            <ReactRef />
          </Route>
          <Route path="/ChildToParent">
            <ChildToParent />
          </Route>
          <Route path="/ErrorBoundary">
            <ErrorBoundary />
          </Route>
          <Route path="/Redux">
            <ReduxExample />
          </Route>
          <Route path="/Redux2">
            <Redux2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
