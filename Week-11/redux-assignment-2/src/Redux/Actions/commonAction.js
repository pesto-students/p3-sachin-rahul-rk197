import commonTypes from '../ActionTypes/commonTypes';

export const setIncrementCounter = data => ({
    type: commonTypes.INCREMENT_COUNTER,
    payload: data
});

export const resetCounter =  data => ({
    type: commonTypes.INCREMENT_COUNTER,
    payload: data
});
