import {SIGNUP_SUCCESS,SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR} from '../actions/actionTypes'

const INITIAL_STATE = {
    authMsg: null,
    user: null
}

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authMsg: action.payload.authMsg,
                user: action.payload.userMail
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMsg
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                authMsg: action.payload.authMsg,
                user: action.payload.userMail
            }
        case SIGNIN_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMsg
            }
        case SIGNOUT_SUCCESS:
            return {
                user: null,
                authMsg: action.payload.authMsg,
            }
        case SIGNOUT_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMsg
            }
        default: 
            return state
    }
}