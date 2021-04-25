import {combineReducers} from 'redux';
import citiesReducers from './citiesReducers';
import itinerariesReducers from './itinerariesReducers';

const mainReducer = combineReducers({
    citiesReducers: citiesReducers,
    itinerariesReducers: itinerariesReducers
})

export default mainReducer