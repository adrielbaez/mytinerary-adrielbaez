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
        default:
            return state
    }
}

export default itinerariesReducer