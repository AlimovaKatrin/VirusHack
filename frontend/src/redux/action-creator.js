import { RECIEVE_USER, ADD_CURRENT_DAY_EVENT,ADD_PATIENT } from './action-type';
//
// ─── USERS ──────────────────────────────────────────────────────────────────────
//
export const recieveUserAC = (user) => ({
    type: RECIEVE_USER,
    user: user
});

//
// ─── PATIENTs ────────────────────────────────────────────────────────────────────
//
export const addPatientAC = (user) => ({
    type: ADD_PATIENT,
    user: user
});
    


//
// ─── DAY EVENTS ─────────────────────────────────────────────────────────────────
// 
export const addCurrentDayEventAC = (day) => ({
    type: ADD_CURRENT_DAY_EVENT,
    day: day
});

