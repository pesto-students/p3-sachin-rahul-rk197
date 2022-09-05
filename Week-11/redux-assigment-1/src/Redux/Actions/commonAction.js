import commonTypes from '../ActionTypes/commonTypes';

export const setRoomLight = data => ({
    type: commonTypes.SET_ROOM_LIGHT,
    payload: data
});
