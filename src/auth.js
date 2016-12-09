import { ref, firebaseAuth } from './config'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


export function auth (email, pw, displayName) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .then(function (user) {
        user.updateProfile({
            displayName: displayName
        })
    })
    .then(redirectPage)
    .catch((error) => console.log('Something\'s off, try again!', error))
}

export function logout () {
  return firebaseAuth().signOut()
  .then(redirectHome)
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
  .then(redirectPage)
}

export function redirectHome(){
    browserHistory.push("/login")
}

export function redirectPage(){
  browserHistory.push("/search")
}


export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    })
    .then(() => user)
}
