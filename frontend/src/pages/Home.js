import React, {Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
const Home = () => {
    var imagen = [
        {logo: 'logo3.png'},
        {portada: 'portada3.jpg'},
        {imagenTravel: 'callToAction.PNG'}
      ]
    return( 
        <Fragment>
                <Header imagen={imagen}  portada={imagen[1].portada}/>
                <CallToAction imagenTravel={imagen[2].imagenTravel}/>
                <Footer />
        </Fragment>
    )  
}

export default Home;