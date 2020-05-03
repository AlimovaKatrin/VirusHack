import { RECIEVE_USER } from './action-type';

const initialState = {
    user: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECIEVE_USER:
             return {user: action.user};
        default:
            return state;
    }
}