import { DECREMENT, INCREMENT, RESET } from './../constants/constants';

const initialState = {
    count: 0
}

const countrReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
           return {
            ...state,
            count: state.count + 1
           }
        case DECREMENT:
           return {
            ...state,
            count: state.count - 1
           }
    
        case RESET:
           return {
            ...state,
            count: 0
           }
    
        default:
            return state;
    }
}

export default countrReducer