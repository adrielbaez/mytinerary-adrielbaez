const initialState = {
    citiesOriginal: [],
    newCitiesCopy:[]
}

const citiesReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITIES':
            return {
                ...state,
                allCities:action.payload,
                newCitiesCurrent:action.payload
            }
        case 'VALUE_INPUT':
            return {
                ...state,
                newCitiesCurrent: state.allCities.filter(city => city.city.toLowerCase().trim().indexOf(action.payload) === 0)
            }
        default:
            return state
    }
}
export default citiesReducers

