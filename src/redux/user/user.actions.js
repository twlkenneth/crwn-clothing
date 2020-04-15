import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, //CAPITAL and snake_case because it will never change.
    payload: user
});