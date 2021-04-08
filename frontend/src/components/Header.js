import React from 'react';
import NavBar from './NavBar';
const Header = ({imagen}) => {

    return (  
      <header style={{backgroundImage: `url('./assets/${imagen[1].portada}')`}}>
        <div className="navbar-color">
          <div className="header-nav">
              <img className="logo" src={`./assets/${imagen[0].logo}`} alt="Logo"/>
              <NavBar/>
          </div>
        </div>
      </header>
    );
}

 
export default Header;