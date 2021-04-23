import {combineReducers} from 'redux';
import citiesReducers from './citiesReducers'

const mainReducer = combineReducers({
    citiesReducers: citiesReducers
})

export default mainReducer