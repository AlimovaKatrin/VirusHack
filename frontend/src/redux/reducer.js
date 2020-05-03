import { RECIEVE_USER, ADD_CURRENT_DAY_EVENT } from './action-type';

const initialState = {
    user: false,
    currentDay: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECIEVE_USER:
            return { ...state, user: action.user };
        case ADD_CURRENT_DAY_EVENT:           
            return { ...state, currentDay: action.day };
        default:
            return state;
    }
}