const initialState = {
    allCities: [],
    newCitiesCurrent:[],
    loading: true
}
const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_CITIES': 
            return {
                allCities:action.payload,
                newCitiesCurrent:action.payload,
                loading: false
            }
        case 'SEARCH_CITIES':
            let newCities;
            let valueInput = action.payload.trim().toLowerCase()
            if (valueInput === '') {
                newCities = state.allCities
            } else {
                newCities = state.allCities.filter(city => city.city.toLowerCase().trim().indexOf(valueInput) === 0)
            }
            return {
                ...state,
                newCitiesCurrent: newCities
            }
        default:
            return state
    }
}
export default citiesReducer

