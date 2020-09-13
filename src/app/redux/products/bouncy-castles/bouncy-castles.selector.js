import {createSelector} from 'reselect'

const selectBouncyCastles = (state) => state.bouncyCastles;

export const selectCurrentBouncyCastles = createSelector(
    [selectBouncyCastles],
    bouncyCastles => bouncyCastles.bouncyCastles,
);