import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5VD01bOXwteQLdRaWCaWdDEv9FA_hpFk",
  authDomain: "userdata-b451d.firebaseapp.com",
  projectId: "userdata-b451d",
  storageBucket: "userdata-b451d.appspot.com",
  messagingSenderId: "556065038025",
  appId: "1:556065038025:web:5b00afb087e2c7d38cb718"

});

var database = firebaseApp.firestore()
export {database}
