import React, {Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';
import CallToAction from '../components/CallToAction';
const Home = () => {
    var imagen = [
        {logo: 'logo.png'},
        {portada: 'portada3.jpg'},
        {imagenTravel: 'callToAction.PNG'}
      ]
    return( 
        <Fragment>
                <Header imagen={imagen}  portada={imagen[1].portada}/>
                <CallToAction  imagenTravel={imagen[2].imagenTravel}/>
                <div className="contenedor-carrusel">
                    <h2 className="text-center">Popular MYtineraries</h2>
                    <div className="carrusel">
                        <Carrusel />
                    </div>
                </div>
                <Footer logo={imagen[0].logo}/>
        </Fragment>
    )  
}

export default Home;