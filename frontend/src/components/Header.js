import React from 'react';
const Header = () => {
  var imagen = [
    {logo: 'logo3.png'},
    {portada: 'portada3.jpg'}
  ]
    return (  
    <header style={{backgroundImage: `url('./assets/${imagen[1].portada}')`}}>
          <div className="navbar-color">
            <div className="header-nav">
                <img src={`./assets/${imagen[0].logo}`} className="logo"/>
                <nav className="d-flex">
                    <div className="d-flex">
                      <i className="fas fa-home"></i>
                      <p>home</p>
                    </div>
                    <div className="d-flex">
                     <i className="fas fa-map-marker-alt"></i>
                      <p>cities</p>
                    </div>
                    <div className="d-flex">
                      <i className="fas fa-user"></i>
                      <p>Sing in</p>
                    </div>
                </nav>
            </div>
          </div>
          <div className="content-welcome d-flex flex-colum">
            <h1>MyTinerary</h1>
            <p>"Find your perfect trip, designed by insiders who know and love their cities!.</p>
          </div>
      </header>
    );
}

 
export default Header;