import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginUser } from '../actions/userActions';
import SignInForm from '../components/SignInForm';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loginUser: loginUser
  }, dispatch);
};

class SignIn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {},
      redirectToUserPreference: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin (formValue) {
    this.props.loginUser(formValue);
  }

  componentWillReceiveProps (nextProps) {
    localStorage.setItem('user', nextProps.user.user);
    localStorage.setItem('token', nextProps.user.token);
    this.setState({ user: { ...nextProps.user }, redirectToUserPreference: true });
  }

  render() {
    const { redirectToUserPreference } = this.state;
    
    if (redirectToUserPreference) {
      alert('redirect na ja');
    }
    
    return (
      <SignInForm handleLogin={ this.handleLogin } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);