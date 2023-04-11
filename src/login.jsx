import React, { useState } from "react";
import { auth } from "./firebase";
import OrderForm from "./order";
import Footer from "./footer";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
  e.preventDefault();
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      setIsLoggedIn(true);
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('User is signed in.');
          setIsLoggedIn(true);
          // You can add your own logic here to handle the signed-in user
        } else {
          console.log('User is signed out.');
          // You can add your own logic here to handle the signed-out user
        }
      });
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

  if (isLoggedIn) {
    return <OrderForm />;
  }

  return (
    <div className="container">
    <h1 className="big-heading">Login Page</h1>
      <form className="login" onSubmit={handleLogin}>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
