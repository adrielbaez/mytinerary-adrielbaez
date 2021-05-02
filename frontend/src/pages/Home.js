import Carrusel from '../components/Carrusel';
import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero'
import { toast, ToastContainer } from 'react-toastify';
const Home = () => {
    var imagenes = {
        portada: 'portada3.jpg',
        imagenTravel: 'callToAction.PNG'
    }

    return (
        <>
            <Hero portada={imagenes.portada} />
            <CallToAction imagenTravel={imagenes.imagenTravel} />
            <div className="contenedor-carrusel">
                <h2 className="text-center">Popular MYtineraries</h2>
                <div className="carrusel">
                    <Carrusel />
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home;