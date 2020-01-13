import { SET_QUIZ } from '../actions/types';

const initialState = {
    label: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_QUIZ:
            return {
                ...state,
                label: payload
            };
        default:
            return state;
    }
};
