import * as firebase from 'firebase';
//import { promises, resolve } from 'dns';

  const firebaseConfig = {
    apiKey: "AIzaSyDeWiJw_XqAbX-KCZTh21fMK3cNwJCRm3g",
    authDomain: "todolist-app-97ebc.firebaseapp.com",
    databaseURL: "https://todolist-app-97ebc.firebaseio.com",
    projectId: "todolist-app-97ebc",
    storageBucket: "todolist-app-97ebc.appspot.com",
    messagingSenderId: "87456388736",
    appId: "1:87456388736:web:e56afe7c6b1dc5461ab865",
    measurementId: "G-CJTD0W4JXQ"
  };


 class Firebase {
    auth: firebase.auth.Auth;
    db: firebase.firestore.Firestore;
    constructor(){
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth()
    this.db = firebase.firestore()
   }
   login(email: string,password: string){
     return this.auth.signInWithEmailAndPassword(email, password)
   }
    isInitialized(){
     return new Promise(resolve=>{
       this.auth.onAuthStateChanged(resolve)
     })
   }
 }


  export default  new Firebase()