import React from 'react';
import CardCity from '../components/CardCity';
import axios from 'axios'
import Swal from 'sweetalert2'

class FiltroCities extends React.Component {
    state = {
        cities: [],
        newCIties: [],
        loading: true
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
            .then(response => this.setState({ cities: response.data.respuesta, loading: false, newCIties: response.data.respuesta }))
            .catch( error =>{ 
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                  .then( ()=> {
                      this.props.history.push('/error')
                  })
            })
    }

    searchCities = (e) => {
        const letras = ((e.target.value).trim()).toLowerCase();

        this.setState({
            newCIties: this.state.cities.filter(city => city.city.toLowerCase().trim().indexOf(letras) === 0)
        })
    }
    render() {
        return (
            <>
                <main className="main-cities">
                    <h1 className="tittle-cities">Cities</h1>
                    <div className="input-container">
                        <input onChange={this.searchCities} type="text" placeholder="Search Cities" />
                    </div>
                    {this.state.loading
                        ? <div className="spinner-container">
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube"></div>
                                <div className="sk-cube2 sk-cube"></div>
                                <div className="sk-cube4 sk-cube"></div>
                                <div className="sk-cube3 sk-cube"></div>
                            </div>
                        </div>
                        : this.state.newCIties.length === 0
                            ? <div className="mensajeErrorBusqueda" style={{ backgroundImage: `url('https://amadeus.com/images/en/air-transportation/ground-handlers/blue-suitcase-at-airport-airplane-in-background.jpg')` }}>
                                <div className="mensajeContent">
                                    <h2>Looks like the city that you're looking for is not yet...</h2>
                                    <p>Try another one!</p>
                                </div>
                            </div>
                            :
                            <div className={this.state.newCIties.length >= 2 ? 'grid-card' : ''}>
                                {this.state.newCIties.map(city => {
                                    return (<CardCity key={city._id} city={city} />)
                                })}
                            </div>
                    }
                </main>
            </>
        );
    }
}

export default FiltroCities;