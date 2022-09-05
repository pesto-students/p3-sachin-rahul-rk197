import commonTypes from '../ActionTypes/commonTypes';
const INITIAL_VALUE = {
    onRoomLight: false
}
const commonDataReducer = (state = INITIAL_VALUE, { type, payload }) => {
    switch (type) {
        case commonTypes.SET_ROOM_LIGHT:
            return {
                ...state,
                onRoomLight: payload
            }

        default:
            return state
    }
}
export default commonDataReducer;