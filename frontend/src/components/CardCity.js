import { NavLink } from 'react-router-dom'
const CardCity = ({ cities }) => {
    return (
        <>
            {cities.length === 0
                ? <div className="mensajeErrorBusqueda" style={{ backgroundImage: `url('https://amadeus.com/images/en/air-transportation/ground-handlers/blue-suitcase-at-airport-airplane-in-background.jpg')` }}>
                    <div className="mensajeContent">
                        <h2>Looks like the city that you're looking for is not yet...</h2>
                        <p>Try another one!</p>
                    </div>
                </div>

                : cities.map(city => {
                    return (
                        <NavLink to={`/itineraries/${city._id}`}>
                            <div key={city._id} className="card">
                                <div className="city-image" style={{ backgroundImage: `url('./assets/${city.src}')` }}></div>
                                <div className="card-info">
                                    <h3>{city.city}</h3>
                                </div>
                                <div className="card-hover">
                                    <h3>{city.city} - {city.country}</h3>
                                    <p className="description-card">{city.description}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
        </>
    );
}

export default CardCity