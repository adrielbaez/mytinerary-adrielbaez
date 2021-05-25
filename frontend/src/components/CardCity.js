import { NavLink } from 'react-router-dom'
const CardCity = ({ city}) => {
    return (
        <>
            {<NavLink to={`/city/${city._id}`}>
                    <div key={city._id} className="card">
                        <div className="city-image" style={{ backgroundImage: `url('${city.src}')` }}></div>
                        <div className="card-info">
                            <h3>{city.city}</h3>
                        </div>
                        <div className="card-hover">
                            <h3>{city.city} - {city.country}</h3>
                            <p className="description-card">{city.description}</p>
                        </div>
                    </div>
                </NavLink>
            }
        </>
    );
}

export default CardCity