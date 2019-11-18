import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCb3PIzh9hWxC_fHpZQZFJktw0F1LAaYGI",
    authDomain: "crown-db-43dc3.firebaseapp.com",
    databaseURL: "https://crown-db-43dc3.firebaseio.com",
    projectId: "crown-db-43dc3",
    storageBucket: "crown-db-43dc3.appspot.com",
    messagingSenderId: "699936183954",
    appId: "1:699936183954:web:990aa70f4ad0d6506a784b",
    measurementId: "G-391RPHQ60S"
}

export const createUserProfileDocument = async (userAuth ,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    if(!snapshot.exits){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error Creating",error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;