import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardItinerary from '../components/CardItinerary';
import itinerariesActions from '../redux/actions/itinerariesActions';
import SpinnerCube from '../components/helpers/Spinner';

class Intineraries extends React.Component {

    state = {
        cityDetails: null,
    }
    componentDidMount() {
        if (this.props.cities.length === 0) {
            this.props.history.push('/cities')
        }
        if (!this.state.cityDetails) {
            let idCity = this.props.match.params.id
            let history = this.props.history
            let cityFilter = this.props.cities.filter(city => city._id === idCity)
            this.setState({
                cityDetails: cityFilter
            })
            this.props.loadItineraries(idCity,history)
        }
    }
    
    render() {
        return (
            <>
                {this.state.cityDetails === null
                    ? <SpinnerCube />
                    :
                    <>
                    
                        <div className="itineraries-hero d-flex flex-centrado" style={{ backgroundImage: `url('${this.state.cityDetails[0].src}')` }}>
                            <div className="content-hero-itineraries">
                                <h1 className="text-center">Welcome to {this.state.cityDetails[0].city} </h1>
                            </div>
                        </div>
                        <div>
                            {this.props.itineraries.length === 0
                                ? <div className="itineraries-hero d-flex flex-centrado">
                                    <div className="content-itinerary" >
                                        <h1 className="text-center">We don't have itineraries for {this.state.cityDetails[0].city} </h1>
                                        <p className="text-itinerary">o back to see more cities!</p>
                                    </div>
                                </div>
                                : this.props.itineraries
                                 ?this.props.itineraries.map(itinerary => {
                                    return (<CardItinerary key={itinerary._id} history = {this.props.history} idCity = {this.props.match.params.id} itinerary={itinerary} />)
                                })
                                 :null
                            }
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
        cities: state.citiesReducer.allCities,
        itineraries: state.itinerariesReducer.intinerariesCity
    }
}
const mapDispatchToProps = {
    loadItineraries: itinerariesActions.loadItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Intineraries)