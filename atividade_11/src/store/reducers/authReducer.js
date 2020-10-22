import {SIGNUP_SUCCESS,SIGNUP_ERROR} from '../actions/actionTypes'

const INITIAL_STATE = {
    authMsg: '',
    user: ''
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
        default: 
            return state
    }
}