import {SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR} from './actionTypes'
import firebase from '../../utils/Firebase'

export const signup = (email, password) => {
    return dispatch => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(
                ()=>{
                    firebase.auth().onAuthStateChanged(
                        (user) => {
                            if(user){
                                dispatch({
                                    type: SIGNUP_SUCCESS,
                                    payload: {
                                        authMsg: `Cadastro efetuado com sucesso`,
                                        userMail: user.email
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
                (user) => {
                    dispatch({
                        type: SIGNIN_SUCCESS,
                        payload: {
                            authMsg: `Login efetuado com sucesso! Bem-vindo`,
                            userMail: user.email
                        }
                    })
                    callback()
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