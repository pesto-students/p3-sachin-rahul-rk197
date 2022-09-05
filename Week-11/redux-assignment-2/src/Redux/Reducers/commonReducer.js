import commonTypes from '../ActionTypes/commonTypes';
const INITIAL_VALUE = {
    counter: 0
}
const commonDataReducer = (state = INITIAL_VALUE, { type, payload }) => {
    switch (type) {
        case commonTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: payload
            }

        case commonTypes.RESET_COUNTER:
            return {
                ...state,
                counter: payload
            }

        default:
            return state;
    }
}
export default commonDataReducer;