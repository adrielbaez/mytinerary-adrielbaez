import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import CardItinerary from '../components/CardItinerary'
import itinerariesActions from '../redux/actions/itinerariesActions'

class Intineraries extends React.Component {

    state = {
        cityDetails: null,
    }
    componentDidMount() {
        this.setState({
            cityDetails: this.props.cities.filter(city => city._id === this.props.match.params.id),
        })

        this.props.loadItineraries(this.props)
    }

    render() {
        return (
            <>
                {this.state.cityDetails === null
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
                        <div className="itineraries-hero d-flex flex-centrado" style={{ backgroundImage: `url('/assets/${this.state.cityDetails[0].src}')` }}>
                            <div className="content-hero-itineraries">
                                <h1 className="text-center">Welcome to {this.state.cityDetails[0].city} </h1>
                            </div>
                        </div>
                        <div>
                            {this.props.itineraries.length === 0
                                ? <div className="itineraries-hero d-flex flex-centrado">
                                <div className="content-itinerary" >
                                    <h1 className="text-center">We don't have itineraries for {this.state.cityDetails[0].city} </h1>
                                    <p className="text-itinerary">But you can make the first one! Or...go back to see more cities!</p>
                                </div>
                            </div>
                                : this.props.itineraries.map(itinerary => {
                                    return (<CardItinerary key={itinerary._id} itinerary={itinerary} />)
                                })}
                        </div>

                        <div className="d-flex flex-centrado">
                            <NavLink exact to="/"><button className="btn-go-back"><i className="fas fa-arrow-left"></i>Home</button></NavLink>
                            <NavLink to="/cities"><button className="btn-go-back"><i className="fas fa-arrow-left"></i>Cities</button></NavLink>
                        </div>
                    </>
                }
            </>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducers.allCities,
        itineraries: state.itinerariesReducers.intinerariesCity
    }
}

const mapDispatchToProps = {
    loadItineraries: itinerariesActions.loadItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Intineraries)