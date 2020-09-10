import {createSelector} from 'reselect';

const selectUser = state => state.user;
const selectBouncyCastles = state => state.bouncyCastles;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser,
);

export const selectCurrentBouncyCastles = createSelector(
    [selectBouncyCastles],
    bouncyCastles => bouncyCastles.bouncyCastles,
);