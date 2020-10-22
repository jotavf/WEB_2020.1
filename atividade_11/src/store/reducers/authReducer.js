const INITIAL_STATE = {
    authMsg: null,
    user: null
}

export default function (state = INITIAL_STATE, action) {
    return {
        ...state,
        authMsg: "Logado com sucesso",
        user: "emaildo@usuario.com"
    }
}