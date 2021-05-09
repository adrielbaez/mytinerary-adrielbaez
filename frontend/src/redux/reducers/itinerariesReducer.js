const initialState = {
    intinerariesCity: []
}

const itinerariesReducer = (state = initialState, action) =>{
    console.log('switch'); 
    switch(action.type) {
        case 'FETCH_ITINERARIES':
            console.log('llegue al reducer');
            console.log(action.payload);
            return {
                ...state, 
                intinerariesCity: action.payload
            }
        case 'LIKE_ITINERARY':
            console.log(action.payload);
            console.log(state.intinerariesCity);
            return {
                ...state,
                intinerariesCity: state.intinerariesCity.map(itinerary => itinerary._id === action.payload._id ? action.payload : itinerary)
            }
        default:
            return state
    }
}

export default itinerariesReducer