import React from 'react';
import CardCity from '../components/CardCity';

class FiltroCities extends React.Component{
    state={
        cities: [
            {
              src: 'ushuaia.jpg',
              name: 'Ushuaia',
              id: 1,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'roma.jpg',
              name: 'Rome',
              id: 2,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'london.jpg',
              name: 'London',
              id: 3,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'paris.jpg',
              name: 'Paris',
              id: 4,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'newYork.jpg',
              name: 'New York',
              id: 5,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'sydney.jpg',
              name: 'Sydney',
              id: 6,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'Shangai.jpg',
              name: 'Shanghai',
              id: 8,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'seattle.jpg',
              name: 'Seattle',
              id: 7,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },             
            {
              src: 'berlin.jpg',
              name: 'Berlin',
              id: 9,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'medellin.jpg',
              name: 'Medellin',
              id: 10,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'tokyo.jpg',
              name: 'Tokyo',
              id: 11,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
            },
            {
              src: 'madrid.jpg',
              name: 'Madrid',
              id: 12,
              description: 'Is the capital and largest city of England and the United Kingdom. London is one of the worlds leading tourism destinations, and the city is home to an array of famous tourist attractions. The city attracted 20.42 million international visitors in 2018, making it one of the worlds most visited in terms of international visits.'
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
                <main className="main-cities">
                    <h1>Cities</h1>
                    <div className="input-container">
                        <input onChange={this.searchCities} type="text" placeholder="Search Cities" />
                    </div>
                    <div className={this.state.newCIties.length > 0 ? 'grid-card' : ''}>
                    <CardCity cities ={this.state.newCIties} />
                    </div>
                </main>
            </>
         );
    }
}
 
export default FiltroCities;