const initialState = {
    allCities: [],
    newCitiesCurrent:[],
    loading: true
}
const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_CITIES': 
            return {
                ...state,
                allCities:action.payload,
                newCitiesCurrent:action.payload,
                loading: false
            }
            break;
        case 'SEARCH_CITIES':
            return {
                ...state,
                newCitiesCurrent: state.allCities.filter(city => city.city.toLowerCase().trim().indexOf(action.payload.trim().toLowerCase()) === 0)
            }
            break;
        default:
            return state
    }
}
export default citiesReducer

