import * as actionTypes from './actionTypes';

const initState = {
    isAuth: false,
    user: {}
    //
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN:
            return action.res || null;
        case SIGN_IN:
            return action.res;
        default:
            return state;
    }
};
    