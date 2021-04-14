import React from 'react';
import CardCity from '../components/CardCity';

class FiltroCities extends React.Component{
    state={
        cities: [
            {
              src: 'ushuaia.jpg',
              name: 'Ushuaia',
              id: 1
            },
            {
              src: 'roma.jpg',
              name: 'Rome',
              id: 2
            },
            {
              src: 'london.jpg',
              name: 'London',
              id: 3
            },
            {
              src: 'paris.jpg',
              name: 'Paris',
              id: 4
            },
            {
              src: 'newYork.jpg',
              name: 'New York',
              id: 5
            },
            {
              src: 'sydney.jpg',
              name: 'Sydney',
              id: 6
            },
            {
              src: 'Shangai.jpg',
              name: 'Shanghai',
              id: 8
            },
            {
              src: 'seattle.jpg',
              name: 'Seattle',
              id: 7
            },             
            {
              src: 'berlin.jpg',
              name: 'Berlin',
              id: 9
            },
            {
              src: 'medellin.jpg',
              name: 'Medellin',
              id: 10
            },
            {
              src: 'tokyo.jpg',
              name: 'Tokyo',
              id: 11
            },
            {
              src: 'madrid.jpg',
              name: 'Madrid',
              id: 12
            }            
          ],
          newCIties:[]
    }
    componentDidMount(){
        this.setState({
            newCIties:[...this.state.cities]
        })
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
            {console.log(this.state.newCIties)}
                <main className="main-cities">
                    <h1>Cities</h1>
                    <div className="input-container">
                        <input onChange={this.searchCities} type="text" placeholder="Search Cities" />
                    </div>
                    <div className={this.state.newCIties.length > 0 && 'grid-card'}>
                    <CardCity cities ={this.state.newCIties} />
                    </div>
                </main>
            </>
         );
    }
}
 
export default FiltroCities;