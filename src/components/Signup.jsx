import React, {useState} from 'react';
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { app } from "../firebase";

const auth = getAuth(app);

const SignupPage = () =>
{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth,email,password).then(value => alert('Sucess'));
    };

    return (
        <div className='signup-page'>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email}  type="email" required placeholder='Enter Your Email here'/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="Password" required placeholder='Enter Your Password here'/>
            <button onClick={createUser}>Sign Up</button>
        </div>
    )
};

export default SignupPage;