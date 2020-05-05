import { RECIEVE_USER, ADD_CURRENT_DAY_EVENT, ADD_PATIENT } from './action-type';

const initialState = {
    user: false,
    carePlan: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECIEVE_USER:
            return { ...state, ['user']: action.user };
        case ADD_CURRENT_DAY_EVENT:
    
                return { ...state, ['carePlan']: [...state.carePlan,action.day] };
          
        case ADD_PATIENT:
            return { ...state, user: action.user };
        default:
            return state;
    }
}