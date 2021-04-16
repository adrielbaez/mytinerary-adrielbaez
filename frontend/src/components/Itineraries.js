import { useEffect, useState } from "react";

const Intineraries = (props) => {
    const [stateCity, setstateCity] = useState(null)

    useEffect(() =>{
        getCityAPI()
   },[])

   const getCityAPI = async () =>{
        const data = await fetch(`http://localhost:4000/api/city/${props.match.params.id}`)
        const city = await data.json()
        setstateCity(city.respuesta)
   }
   console.log(stateCity);
    return ( 
        <>
            {stateCity === null
                ? <h1>hola</h1>
                :<div className="itineraries-hero d-flex flex-centrado" style={{backgroundImage: `url('/assets/${stateCity.src}')`}}>
                <div className="content-hero-itineraries">
                    <h1>hola soy {stateCity.city} </h1>
                </div>
            </div>
            }
        </>
     );
}
 
export default Intineraries;