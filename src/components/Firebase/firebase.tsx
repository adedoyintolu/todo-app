import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDeWiJw_XqAbX-KCZTh21fMK3cNwJCRm3g',
  authDomain: 'todolist-app-97ebc.firebaseapp.com',
  databaseURL: 'https://todolist-app-97ebc.firebaseio.com',
  projectId: 'todolist-app-97ebc',
  storageBucket: 'todolist-app-97ebc.appspot.com',
  messagingSenderId: '87456388736',
  appId: '1:87456388736:web:e56afe7c6b1dc5461ab865',
  measurementId: 'G-CJTD0W4JXQ',
};

class Firebase {
  auth: any;

  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);
}

export default Firebase;
