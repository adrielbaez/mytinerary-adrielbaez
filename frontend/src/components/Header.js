import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
const Header = ({imagen}) => {
    return (  
        <>
          <NavBar logo={imagen[0]}/>
          <Hero portada={imagen[1].portada}/>
        </>  
    );
}

 
export default Header;