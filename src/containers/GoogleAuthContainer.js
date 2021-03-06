import React from 'react';
import { connect } from 'react-redux';
import { getIsSignIn } from '../selectors';
import { signIn, signOut } from '../actions/auth';
import GoogleAuth from '../components/GoogleAuth';

class GoogleAuthContainer extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: process.env.REACT_APP_GOOGLE,
          scope: 'email'
      }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();          
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
      }).catch((e)=>{console.log(e)});
    });
  }

  onAuthChange = (isSignedIn) => {        
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {    
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return (
      <GoogleAuth isSignedIn={this.props.isSignedIn} signIn={this.onSignInClick} signOut={this.onSignOutClick} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: getIsSignIn(state)
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuthContainer);