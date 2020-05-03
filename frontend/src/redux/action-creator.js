import { RECIEVE_USER, ADD_CURRENT_DAY_EVENT } from './action-type';
//
// ─── USERS ──────────────────────────────────────────────────────────────────────
//
export const recieveUserAC = (user) => ({
    type: RECIEVE_USER,
    user: user
});
//
// ─── DAY EVENTS ─────────────────────────────────────────────────────────────────
// 
export const addCurrentDayEventAC = (day) => ({
    type: ADD_CURRENT_DAY_EVENT,
    day: day
});

