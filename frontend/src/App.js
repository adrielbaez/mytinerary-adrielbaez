import React from 'react';
import Home from './pages/Home';
import Cities from './pages/Cities'
import Error from './components/Error'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Itineraries from './components/Itineraries'

function App() {
  var imagen = {
    logo: 'logo.png'
  }
  const  haciaArriba = () =>{window.scroll({
    top: 0,
    left: 0
})}
  return (
    <BrowserRouter>
    <NavBar logo={imagen.logo} haciaArriba={haciaArriba} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cities" component={Cities} />
        <Route  path="/itineraries/:id" component={Itineraries} />
        <Route  path="/error" component={Error} />
        <Redirect to="/error"/>
      </Switch>
      <Footer haciaArriba={haciaArriba} logo={imagen.logo}/>
    </BrowserRouter>
  );
}

export default App;
