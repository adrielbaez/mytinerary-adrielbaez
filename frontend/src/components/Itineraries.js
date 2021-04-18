import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'

const Intineraries = (props) => {
    const [stateCity, setstateCity] = useState(null)

    useEffect(() => {
        getCityAPI()

    }, [stateCity])
    const getCityAPI = async () => {
        const data = await fetch(`http://localhost:4000/api/city/${props.match.params.id}`)
        const city = await data.json()
        setstateCity(city.respuesta)
    }
    return (
        <>
            {stateCity === null
                ? <div className="spinner-container">
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                </div>
                :
                <>
                    <div className="itineraries-hero d-flex flex-centrado" style={{ backgroundImage: `url('/assets/${stateCity.src}')` }}>
                        <div className="content-hero-itineraries">
                            <h1 className="text-center">Welcome to {stateCity.city} </h1>
                        </div>
                    </div>
                    <div className="d-flex flex-centrado">
                        <div className="under-construction" style={{ backgroundImage: `url('/assets/underconstruction.png')` }}>
                        </div>
                    </div>
                    <div className="d-flex flex-centrado">
                        <NavLink exact to="/"><button className="btn-go-back"><i className="fas fa-arrow-left"></i>Go to Home</button></NavLink>
                        <NavLink to="/cities"><button className="btn-go-back"><i className="fas fa-arrow-left"></i>Go Back to Cities</button></NavLink>
                    </div>
                </>
            }
        </>
    );
}

export default Intineraries;