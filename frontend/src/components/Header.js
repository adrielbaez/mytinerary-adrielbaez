import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
const Header = ({imagenes}) => {
    return (  
        <>
          <Hero portada={imagenes.portada}/>
        </>  
    );
}

 
export default Header;