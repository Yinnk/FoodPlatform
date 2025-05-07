import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React, { useState } from 'react';
import { auth } from '../index.js'
import { useNavigate } from 'react-router-dom'; 
import './user-auth.css';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 


export function MySignInScreen() {
  const auth = getAuth();
  const [message,setMessage] = useState(''); 
  const [isSignedIn, setIsSignedIn] = useState(false); 
  const navigate = useNavigate(); 
  const handleGoHome = () => {
    navigate('/'); // navigate to the home page
  }

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
  <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
    <div className="row g-4 m-5 rounded overflow-hidden" >
      {/* Left Column */}
      <div className="col-12 col-md-6 p-5 d-flex flex-column justify-content-center">
        <div className="auth-content">
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

          {message && <p className="text-success">{message}</p>}

          {!isSignedIn && (
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
          )}

          {isSignedIn && (
            <button className="btn btn-primary mt-4" onClick={handleGoHome}>
              Go to Homepage
            </button>
          )}
        </div>
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-6 p-0 d-none d-md-block">
        <img
          src="./public/img/food.webp"
          alt="Food"
          className="img-fluid h-100 w-100 rounded"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
);
}