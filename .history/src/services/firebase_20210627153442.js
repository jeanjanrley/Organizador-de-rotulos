import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBG3O8epyVVjHtMQxXL-4YtgMH90s-a4Gk",
    authDomain: "rotulos-c1220.firebaseapp.com",
    databaseURL: "https://rotulos-c1220-default-rtdb.firebaseio.com",
    projectId: "rotulos-c1220",
    storageBucket: "rotulos-c1220.appspot.com",
    messagingSenderId: "253076392498",
    appId: "1:253076392498:web:71d28e5b787916afc6ca2b"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()


export { firebase, auth, database };