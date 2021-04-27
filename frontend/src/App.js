import Home from './pages/Home';
import Cities from './pages/Cities'
import Error from './components/Error'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Itineraries from './pages/Itineraries'
import ToTop from './components/ToTop';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  var imagen = {
    logo: 'logo.png'
  }

  return (
    <BrowserRouter>
    <ToTop />
    <NavBar logo={imagen.logo}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cities" component={Cities} />
        <Route  path="/city/:id" component={Itineraries} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/signin" component={SignIn} />
        <Route  path="/error" component={Error} />
        <Redirect to="/error"/>
      </Switch>
      <Footer logo={imagen.logo}/>
    </BrowserRouter>
  );
}

export default App;
