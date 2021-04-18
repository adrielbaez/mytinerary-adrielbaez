import React, { useEffect } from 'react';
import Home from './pages/Home';
import Cities from './pages/Cities'
import Error from './components/Error'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Itineraries from './components/Itineraries'

const App = () => {
  var imagen = {
    logo: 'logo.png'
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <BrowserRouter>
    <NavBar logo={imagen.logo}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cities" component={Cities} />
        <Route  path="/itineraries/:id" component={Itineraries} />
        <Route  path="/error" component={Error} />
        <Redirect to="/error"/>
      </Switch>
      <Footer logo={imagen.logo}/>
    </BrowserRouter>
  );
}

export default App;
