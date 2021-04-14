import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
const Header = ({imagenes}) => {
    return (  
        <>
          <NavBar logo={imagenes[0]}/>
          <Hero portada={imagenes[1].portada}/>
        </>  
    );
}

 
export default Header;