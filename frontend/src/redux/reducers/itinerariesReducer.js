const initialState = {
    intinerariesCity: []
}

const itinerariesReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'FETCH_ITINERARIES':
            return {
                ...state, 
                intinerariesCity: action.payload
            }
        case 'LIKE_ITINERARY':
            return {
                ...state,
                intinerariesCity: state.intinerariesCity.map(itinerary => itinerary._id === action.payload._id ? action.payload : itinerary)
            }
        case 'COMMENT':
            return {
                ...state,
                intinerariesCity: state.intinerariesCity.map(itinerary => itinerary._id === action.payload._id ? action.payload : itinerary)
            }
        default:
            return state
    }
}

export default itinerariesReducer