import {createSelector} from 'reselect';

const selectBouncyCastleDetails = state => state.bouncyCastleDetails;

export const selectCurrentBouncyCastleDetails = createSelector(
    [selectBouncyCastleDetails],
    bouncyCastleDetails => bouncyCastleDetails.bouncyCastleDetails,
);