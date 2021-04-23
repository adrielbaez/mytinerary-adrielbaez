import React from 'react';
import Hero from './Hero';
const Header = ({ imagenes }) => {
  return (
    <>
      <Hero portada={imagenes.portada} />
    </>
  );
}


export default Header;