import React, { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import ToDo from '../ToDo/';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import firebase from './config/firebase';

const App = () => {
  // const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  // useEffect(() => {
  //   firebase.isInitialized().then((val: any) => {
  //     return setFirebaseInitialized(val);
  //   });
  // });

  return (
    <Router>
      <Route component={SignInPage} exact={true} path={ROUTES.LANDING} />
      <Route component={SignUpPage} exact={true} path={ROUTES.SIGN_UP} />
      <Route component={ToDo} path={ROUTES.HOME} />
    </Router>
  );
};

export default App;
