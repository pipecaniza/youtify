import React from 'react';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {  
  if (isSignedIn === null) {
    return null;
  }
  if (isSignedIn) {
    return (
        <button type="button" className="btn btn-danger sign-out" onClick={signOut}>
          <i className="fab fa-google"></i>
          &nbsp;Sign Out
        </button>
    );
  }
  else {
    return (      
        <button type="button" className="btn btn-primary sign-in" onClick={signIn}>
          <i className="fab fa-google"></i>
        &nbsp;Sign In with Google
        </button>
    );
  }
  
};

export default GoogleAuth;