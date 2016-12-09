import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBtr8-4UfTCNjiMsZZuwwNlTIr_wLWIRoM",
    authDomain: "twip-3b85b.firebaseapp.com",
    databaseURL: "https://twip-3b85b.firebaseio.com",
    storageBucket: "twip-3b85b.appspot.com",
    messagingSenderId: "563323506409"
};

  firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
