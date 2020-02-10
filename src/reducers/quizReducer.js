import { SET_SCORES, LOGOUT_USER } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_SCORES:
            const newScores = {};
            for (let item in payload) {
                if (item === '_id' || item === '__v' || item === 'user') {
                    continue;
                }
                newScores[item] = payload[item];
            }
            return newScores;
        case LOGOUT_USER:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
