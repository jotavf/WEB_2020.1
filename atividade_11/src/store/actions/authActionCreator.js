import {SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR, EMAIL_NOT_VERIFIED} from './actionTypes'
import firebase from '../../utils/Firebase'

export const signup = (email, password) => {
    return dispatch => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(
                ()=> {
                    firebase.auth().onAuthStateChanged((user) => {
                        user.sendEmailVerification()
                    })
                }
            )
            .then(
                ()=>{
                    firebase.auth().onAuthStateChanged(
                        (user) => {
                            if(user){
                                dispatch({
                                    type: SIGNUP_SUCCESS,
                                    payload: {
                                        authMsg: `Cadastro efetuado com sucesso! Verifique seu e-mail`,
                                        userMail: user.email,
                                        verified: false
                                    }
                                })
                            }
                            else{  
                                dispatch({
                                    type: SIGNUP_ERROR,
                                    payload: { authMsg: `Erro no cadastro:`}
                                })
                            }
                        }
                    )

                }

            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNUP_ERROR,
                        payload: { authMsg: `Erro no cadastro: ${error}`}
                    })
                }
            )
        }
        catch(error){
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMsg: `Erro no cadastro: ${error}`}
            })
        }

    }
}

export const signin = (email,password,callback) => {
    return dispatch => {
        try{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (data) => {
                    if(!data.user.emailVerified){
                        dispatch({
                            type: EMAIL_NOT_VERIFIED,
                            payload: {
                                authMsg: `E-mail não verificado, por favor, verificar o inbox do e-mail cadastrado (Pode estar na caixa de SPAM)`,
                                verified: false
                            }
                        })
                    }
                    else{
                        dispatch({
                            type: SIGNIN_SUCCESS,
                            payload: {
                                authMsg: `Login efetuado com sucesso! Bem-vindo`,
                                user: data.user.email,
                                verified: true
                            }
                        })
                    }
                    callback(data.user)
                }
            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNIN_ERROR,
                        payload: { authMsg: `Erro no login: ${error}`}
                    })
                    callback()
                }
            )
        }
        catch{
            dispatch({
                type: SIGNIN_ERROR,
                payload: { authMsg: `Erro no login`}
            })
        }
    }
}

export const signout = (callback) => {
    return dispatch => {
        try{
            firebase.auth().signOut()
            .then(
                ()=> {
                    dispatch({
                        type: SIGNOUT_SUCCESS,
                        payload: { authMsg: `Logout com sucesso`, verified: false}
                    })
                    callback()
                }
            )
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNOUT_ERROR,
                        payload: { authMsg: `Erro no logout`}
                    })
                    callback()
                }
            )
        }
        catch{
            dispatch({
                type: SIGNOUT_ERROR,
                payload: { authMsg: `Erro no logout`}
            })
        }
    }
}