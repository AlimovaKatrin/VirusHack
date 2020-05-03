import { RECIEVE_USER } from './action-type';

export const recieveUserAC = (user) => ({
    type: RECIEVE_USER,
    user: user
});

