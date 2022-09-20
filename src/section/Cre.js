import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

var amount = firebase.initializeApp({
 apiKey: "AIzaSyAndu5MGAkMFjbYjrhkLnbxfca7idO13no",
  authDomain: "withdraw-user.firebaseapp.com",
  projectId: "withdraw-user",
  storageBucket: "withdraw-user.appspot.com",
  messagingSenderId: "694040659896",
  appId: "1:694040659896:web:7b00b81a5a3eff2211314d"
}, "amount");
var withdraw = amount.firestore()
export {withdraw}