import React from 'react';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  console.log(isSignedIn);
  if (isSignedIn === null) {
    return null;
  }
  if (isSignedIn) {
    return (
        <button type="button" className="btn btn-danger" onClick={signOut}>
          <i className="fab fa-google"></i>
          &nbsp;Sign Out
        </button>
    );
  }
  else {
    return (      
        <button type="button" className="btn btn-primary" onClick={signIn}>
          <i className="fab fa-google"></i>
        &nbsp;Sign In with Google
        </button>
    );
  }
  
};

export default GoogleAuth;