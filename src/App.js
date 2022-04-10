import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';

const auth =getAuth(app);
function App() {
  const [user, setuser]= useState({});
  const handleSignIn=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      console.log(user)
      setuser(user);
    })
    .catch(error=>{
      console.log(error);
    })
  };
  return (
    <div className="App">
      <button onClick={handleSignIn}>Googel sign In</button>
      <p>Name: {user.displayName}</p>
      <img src={user.photoURL}></img>
    </div>
  );
}

export default App;
