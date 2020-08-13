import React, { useState, useEffect } from 'react';
import LoginPage from './Auth/LoginPage';
import TodoPage from './Todo/Todo'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import firebase from './config/firebase';

const App = () =>{
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val:any) => {
      return setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !==false ? (
    <Router>
      <Switch>
        <Route 
          component={LoginPage}
          exact 
          path="/" 
        />
        <Route 
          component={TodoPage} 
          path="/todo" 
        />
      </Switch>
    </Router>
  ) : <div>You Need to Log In</div>
} 

export default App;