import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Cities = () => {
    var imagen = [
        {logo: 'logo.png'},
        {portada: 'portada3.jpg'},
        {imagenTravel: 'callToAction.PNG'}
      ]
    
    return ( 
        <div className="d-flex flex-colum2">
            <NavBar logo={imagen[0]}/>
            <div className="d-flex flex-centrado">
                <img className="under-construction" src="https://danvilleinstituteofgymnastics.files.wordpress.com/2015/02/underconstruction.jpg" alt="construction"/>
            </div>
            <Footer logo={imagen[0].logo}/>
        </ div>
    );
}
 
export default Cities;