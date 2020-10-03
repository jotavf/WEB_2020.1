//conexão com o Firebase

import firebase from 'firebase/app'
import 'firebase/firestore'
import firebase_key from '../keys/firebase_key'

export default class Firestore {
    constructor(){
        firebase.initializeApp(firebase_key)
    }

    getFirestore() {
        return firebase.firestore()
    }
} 