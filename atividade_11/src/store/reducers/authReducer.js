import {SIGNUP_SUCCESS,SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, EMAIL_NOT_VERIFIED} from '../actions/actionTypes'

const INITIAL_STATE = {
    authMsg: null,
    user: null,
    verified: false
}

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authMsg: action.payload.authMsg,
                user: action.payload.userMail,
                verified: action.payload.verified
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
                user: action.payload.userMail,
                verified: action.payload.verified
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
        case EMAIL_NOT_VERIFIED:
            return {
                ...state,
                authMsg: action.payload.authMsg,
                verified: action.payload.verified
            }
        default: 
            return state
    }
}