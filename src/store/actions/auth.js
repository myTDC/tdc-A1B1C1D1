import * as actionTypes from './actionTypes';
import {authRef, provider} from '../config/fb';


export const fbSignIn = (/*Takes Payload of the associated Action*/) => {
    return dispatch => {
        authRef.signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            dispatch(logIn(token, user))
            // ...
          }).catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
          });
    }};
};

export const logIn = (token, user) => {
    return { /*Retunrs an action*/
        type: actionTypes.AUTH_LOGIN,
        authToken: token,
        authUser: user
    };
};