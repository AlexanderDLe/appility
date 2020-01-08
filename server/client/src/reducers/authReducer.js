import { FETCH_USER, LOGOUT_USER } from '../actions/types';

export default function(state = null, action) {
    // console.log('Incoming Action');
    // console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case LOGOUT_USER:
            return false;
        default:
            return state;
    }
}
