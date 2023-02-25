import React, { useState } from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../firebase";
import SignupPage from './Signup';
import { Box,Center } from '@chakra-ui/react';
const auth = getAuth(app);
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((value) => console.log("success"))
    .catch((err) => console.log(err));
  };
  return ( 
    <div className="main">
      <div className="login-form-container">
      <h1>Login Page</h1>
      
        <div>
          <label >Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(f) => setEmail(f.target.value)}
          />
        </div>
        <div>
          <label >Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(f) => setPassword(f.target.value)}
          />
        </div>
        <button onClick={signinUser}>Log In</button>
      </div>
      <button onClick={<SignupPage/>}>new user</button>
    </div>
  );
};

export default Login;
