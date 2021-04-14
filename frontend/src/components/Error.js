import Footer from "./Footer"
import NavBar from "./NavBar"

const Error = () => {
    var imagenes = [
        {logo: 'logo.png'},
        {portada: 'portada3.jpg'},
        {imagenTravel: 'callToAction.PNG'}
      ]
    return ( 
        <>
            <NavBar logo={imagenes[0]} />
            <h1>Error 404</h1>
            <Footer logo={imagenes[0].logo}/>
        </>
     );
}
 
export default Error;