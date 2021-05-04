import Home from './pages/Home';
import Cities from './pages/Cities'
import Error from './components/Error'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Itineraries from './pages/Itineraries'
import ToTop from './components/helpers/ToTop';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {connect} from 'react-redux';
import authActions from './redux/actions/authActions';
import { ToastContainer, toast } from 'react-toastify';

const App = (props) => {
  if (!props.userLogged && localStorage.getItem('token')) {
    const dataUser = JSON.parse(localStorage.getItem('userLogged'))
    const userLS = {
      token: localStorage.getItem('token'),
      ...dataUser
    }
    props.iniciarSesionLS(userLS)
  }
  var imagen = {
    logo: 'logo.png'
  }
  if (props.userLogged) {       
    toast.success(`Welcome ${props.userLogged.firstName}`)
}
  return (
    <BrowserRouter>
    <ToTop />
    <NavBar logo={imagen.logo}/>
    <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cities" component={Cities} />
        <Route  path="/city/:id" component={Itineraries} />
        {!props.userLogged && <Route  path="/signup" component={SignUp} />}
        {!props.userLogged && <Route  path="/signin" component={SignIn} />}
        <Route  path="/error" component={Error} />
        <Redirect to="/"/>
      </Switch>
      <Footer logo={imagen.logo}/>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  return {
    userLogged: state.authReducer.userLogged
  }
}

const mapDispatchToProps = {
  iniciarSesionLS: authActions.iniciarSesionLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
