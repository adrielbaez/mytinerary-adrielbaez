import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
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

const NavBar = ({logo: {logo}}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-header">
      <Navbar color="light" light expand="md">
        <NavLink exact to="/"><img className="logo" src={`./assets/${logo}`} alt="logo" /></NavLink>
  
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink exact to="/"><i className="fas fa-home"></i>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cities"><i className="fas fa-map-marker-alt"></i>Cities</NavLink>
            </NavItem>
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <i className="fas fa-user"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Sign Up
                </DropdownItem>
                <DropdownItem>
                  Log In
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
          </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;


