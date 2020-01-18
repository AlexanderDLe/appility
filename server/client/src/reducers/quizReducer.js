import { SET_SCORES, LOGOUT_USER } from '../actions/types';

const initialState = {
    JavaScript: null,
    React: null,
    Redux: null,
    Git: null,
    NodeExpress: null,
    TypeScript: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_SCORES:
            return {
                ...state,
                JavaScript: payload.JavaScript || null,
                React: payload.React || null,
                Redux: payload.Redux || null,
                Git: payload.Git || null,
                NodeExpress: payload.NodeExpress || null,
                TypeScript: payload.TypeScript || null
            };

        case LOGOUT_USER:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
