import { useEffect, useState } from "react";

const Intineraries = (props) => {
    const [idCity, setIdCity] = useState(null)

    useEffect(() =>{
        setIdCity(props.match.params.id)
    },[])
    
    return ( 
        <>
            <div className="itineraries-hero d-flex flex-centrado" style={{backgroundImage: `url('https://amadeus.com/images/en/air-transportation/ground-handlers/blue-suitcase-at-airport-airplane-in-background.jpg')`}}>
                <div className="content-hero-itineraries">
                    <h1>hola soy el componente con el id {idCity}</h1>
                </div>
            </div>
        </>
     );
}
 
export default Intineraries;