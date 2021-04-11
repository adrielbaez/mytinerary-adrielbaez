import React from 'react';
import Home from './pages/Home';
import Cities from './pages/Cities'
import Error from './components/Error'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cities" component={Cities} />
        <Route  path="/error" component={Error} />
        <Redirect to="/error"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
