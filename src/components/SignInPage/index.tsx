import React, { useState } from 'react';
import firebase from '../Firebase/firebase';
import '../App.css';

const SignInPage = (props: {
  history: { replace: (arg0: string) => void };
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace('/todo');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="app">
      <form className="form" onSubmit={login}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
