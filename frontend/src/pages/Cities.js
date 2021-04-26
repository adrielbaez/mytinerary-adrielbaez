import React from 'react';
import {connect} from 'react-redux';
import CardCity from '../components/CardCity';
import citiesActions from '../redux/actions/citiesActions';
class Cities extends React.Component {
   
    componentDidMount(){
            this.props.loadCities(this.props.history)
    }
    
    render() {
        return (
            <>
                <main className="main-cities">
                    <h1 className="tittle-cities">Cities</h1>
                    <div className="input-container">
                        <input onChange={(e)=>this.props.searchCities(e.target.value)} type="text" placeholder="Search Cities" />
                    </div>
                    {this.props.loading
                        ? <div className="spinner-container">
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube"></div>
                                <div className="sk-cube2 sk-cube"></div>
                                <div className="sk-cube4 sk-cube"></div>
                                <div className="sk-cube3 sk-cube"></div>
                            </div>
                        </div>
                        : this.props.newCities.length === 0
                            ? <div className="mensajeErrorBusqueda" style={{ backgroundImage: `url('/assets/suitcase.jpg')` }}>
                                <div className="mensajeContent">
                                    <h2>We can't find the city...</h2>
                                    <p>Try another one!</p>
                                </div>
                            </div>
                            :
                            <div className={this.props.newCities.length >= 2 ? 'grid-card' : ''}>
                                {this.props.newCities.map(city => {
                                    return (<CardCity key={city._id} city={city} />)
                                })}
                            </div>
                    }
               </main> 
            </>
        );
    }
}

const mapStateToProps = state =>{
    return {
        newCities: state.citiesReducer.newCitiesCurrent,
        loading: state.citiesReducer.loading
    }
}
const mapDispatchToProps ={
    loadCities: citiesActions.loadCities,
    searchCities: citiesActions.searchCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);