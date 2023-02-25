import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { app } from '../firebase';
const auth = getAuth(app);
const home = () => {
  return (
    <div>home
    <button onClick={() => signOut(auth)}> log out </button>
 </div> )
}

export default home