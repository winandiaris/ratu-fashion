import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBEHoi0X-IbTGIqJZv6GZ3Hpv86UNzpmtg",
    authDomain: "ratu-fashion-799c4.firebaseapp.com",
    databaseURL: "https://ratu-fashion-799c4.firebaseio.com",
    projectId: "ratu-fashion-799c4",
    storageBucket: "ratu-fashion-799c4.appspot.com",
    messagingSenderId: "96907997907",
    appId: "1:96907997907:web:af661eab0f0480809fda26",
    measurementId: "G-00DYBKSH10"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot =  await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase