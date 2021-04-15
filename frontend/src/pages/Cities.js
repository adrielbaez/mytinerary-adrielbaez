import React from 'react';
import CardCity from '../components/CardCity';
import axios from 'axios'
class FiltroCities extends React.Component{
    state={
        cities: [],
        newCIties:[],
        loading: true
    }
    componentDidMount(){
      axios.get('http://localhost:4000/api/cities')
      .then(response =>  this.setState({cities: response.data.respuesta, loading: false, newCIties:response.data.respuesta }))

      
    } 
       
    searchCities = (e) =>{
        const letras = ((e.target.value).trim()).toLowerCase();
         
        this.setState({
            newCIties: this.state.cities.filter(city => city.name.toLowerCase().trim().indexOf(letras) === 0)
        })   
     }
    render(){
        return ( 
            <>
              {console.log(this.state)}
                <main className="main-cities">
                    <h1>Cities</h1>
                    <div className="input-container">
                        <input onChange={this.searchCities} type="text" placeholder="Search Cities" />
                    </div>
                    <div className={this.state.newCIties.length > 2 ? 'grid-card' : ''}>
                    <CardCity cities ={this.state.newCIties} />
                    </div>
                </main>
            </>
         );
    }
}
 
export default FiltroCities;