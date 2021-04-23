const initialState = {
    intinerariesCity: []
}

const itinerariesReducers = (state = initialState, action) =>{
    switch(action.type) {
        case 'FETCH_ITINERARIES':
            return {
                ...state,
                intinerariesCity: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducers