import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginUser } from '../actions/userActions';
import SignInForm from '../components/SignInForm';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loginUser: loginUser
  }, dispatch);
};

class SignIn extends React.Component {
  handleLogin (formValue) {
    console.log('test');
    console.log(formValue);
  }

  render() {
    return (
      <SignInForm handleLogin={ this.handleLogin } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);