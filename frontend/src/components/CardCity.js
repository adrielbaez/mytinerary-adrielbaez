const CardCity = ({ cities }) => {
    return (
        <>
            {cities.length === 0
                ? <div className="mensajeErrorBusqueda"  style={{backgroundImage: `url('https://amadeus.com/images/en/air-transportation/ground-handlers/blue-suitcase-at-airport-airplane-in-background.jpg')`}}>
                    <div className="mensajeContent">
                        <h2>Looks like the city that you're looking for is not yet...</h2>
                        <p>Try another one!</p>
                    </div>
                </div>
                
                : cities.map(city => {
                    return (
                        <div key={city.id} className="card">
                            <div className="city-image" style={{ backgroundImage: `url('./assets/${city.src}')` }}></div>
                            <div className="card-info">
                                <h3>{city.name}</h3>
                                <span className="green">bandera</span>
                            </div>
                            <div className="card-hover">
                                <h3>{city.name}</h3>
                                <p>{city.description}</p>
                                <button className="btn-city">Let`s go</button>
                            </div>
                        </div>
                    )
                })}
        </>
    );
}

export default CardCity