import React from 'react';
import {connect} from 'react-redux';
import CardCity from '../components/CardCity';
import SpinnerCube from '../components/helpers/Spinner';
import citiesActions from '../redux/actions/citiesActions';
class Cities extends React.Component {
   
    componentDidMount(){
            if (this.props.newCities.length === 0) {
                this.props.loadCities(this.props.history)
            }
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
                        ? <SpinnerCube />
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
                                    return (<CardCity key={city._id} city={city} history={this.props.history}/>)
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
        allCities: state.citiesReducer.allCities,
        loading: state.citiesReducer.loading
    }
}
const mapDispatchToProps ={
    loadCities: citiesActions.loadCities,
    searchCities: citiesActions.searchCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);