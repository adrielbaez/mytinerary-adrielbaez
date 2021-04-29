import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavBar = (props) => {
  let picture = props.userLogged ? `${props.userLogged.respuesta.userPicture}` : '/assets/userIcon.png'
  // console.log(props.userLogged.userPicture);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-header">
      <Navbar color="light" light expand="md">
        <NavLink exact to="/"><img className="logo" src={`/assets/logo.png`} alt="logo" /></NavLink>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/"><i className="fas fa-home"></i>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cities"><i className="fas fa-map-marker-alt" ></i>Cities</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <div className="userPicture" style={{ backgroundImage: `url(${picture})` }}></div>
              </DropdownToggle>
              <DropdownMenu right>
                {!props.userLogged
                  ? (
                    <>
                      <Link to="/signup">
                        <DropdownItem>
                          Sign up
                        </DropdownItem>
                      </Link>
                      <Link to="/signin">
                        <DropdownItem>
                          Sign In
                        </DropdownItem>
                      </Link>
                    </>
                  )
                  : (
                    <DropdownItem>
                      <h3 className='signout' onClick={props.cerrarSesion}>Sign Out</h3>
                    </DropdownItem>
                  )
                }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



const mapStateToProps = state => {
  return {
    userLogged: state.authReducer.userLogged
  }
}
const mapDispatchToProps = {
  cerrarSesion: authActions.cerrarSesion
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


