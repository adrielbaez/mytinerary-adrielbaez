import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios'

class Intineraries extends React.Component {
    state = {
        cityState: null
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/api/city/${this.props.match.params.id}`)
            .then(response => this.setState({ cityState: response.data.respuesta }))
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
                    .then(() => {
                        this.props.history.push('/error')
                    })
            }) 
    }

    render() {
        return (
            <>
                {this.state.cityState === null 
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
                        <div className="itineraries-hero d-flex flex-centrado" style={{ backgroundImage: `url('/assets/${this.state.cityState.src}')` }}>
                            <div className="content-hero-itineraries">
                                <h1 className="text-center">Welcome to {this.state.cityState.city} </h1>
                            </div>
                        </div>
                        <div className="d-flex flex-centrado">
                            <div className="under-construction" style={{ backgroundImage: `url('/assets/underconstruction.png')` }}>
                            </div>
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

export default Intineraries;