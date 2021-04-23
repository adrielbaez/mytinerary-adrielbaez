import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import CardItinerary from '../components/CardItinerary'

class Intineraries extends React.Component {

    state={
        cityDetails: null,
    }
    componentDidMount() {
        this.setState({
            cityDetails: this.props.cities.filter(city => city._id === this.props.match.params.id),
        })
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
                        <CardItinerary />
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
    return{
        cities: state.citiesReducers.allCities
    }
} 
export default connect(mapStateToProps)(Intineraries)