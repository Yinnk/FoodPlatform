//import auth functions and variables from Firebase
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React, { useState } from 'react';
import { auth } from '../index.js'; //import the auth object 
import { useNavigate } from 'react-router-dom'; //import the useNavigate hook


//import the component -- pick one!
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1


//the React compnent to render
export function MySignInScreen() {
  const auth = getAuth();
  const [message,setMessage] = useState(''); //state variable to hold the message
  const [isSignedIn, setIsSignedIn] = useState(false); //state variable to hold the signed in status
  const navigate = useNavigate(); //use the useNavigate hook to navigate to different routes

  const handleGoHome = () => {
    navigate('/'); // navigate to the home page
  }

  //an object of configuration values
const firebaseUIConfig = {
  signInOptions: [
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
  ],
  signInFlow: 'redirect',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: (authResult) => {
      if (authResult.additionalUserInfo.isNewUser) {
        setMessage('Account created successfully!');
      } else {
        setMessage('You are now signed in!');
      }
      setIsSignedIn(true);
      return false; // prevent automatic redirect
  }
  }
};


  return (
<div>
      {isSignedIn ? (
        <>
          <h1>Success!</h1>
          <p>Click below to go to the home page.</p>
        </>
      ) : (
        <>
          <h1>Let's Get You Set Up!</h1>
          <p>Create your account to start reserving surprise meals near you.</p>
        </>
      )}

      {message && <p>{message}</p>} 

      {!isSignedIn && (
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      )}

      {isSignedIn && (
        <button onClick={handleGoHome} style={{ marginTop: '20px' }}>
          Go to Home Page
        </button>
      )}
    </div>  
    );}
