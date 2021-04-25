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
        default:
            return state
    }
}

export default itinerariesReducer