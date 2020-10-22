import {SIGNUP_SUCCESS, SIGNUP_ERROR} from './actionTypes'
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
                        payload: { authMessage: `Erro no cadastro: ${error}`}
                    })
                }
            )
        }
        catch(error){
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMessage: `Erro no cadastro: ${error}`}
            })
        }

    }
}