import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import SignInForm from '../components/SignInForm';
import { setStorage } from '../services/authentication-service';

import styles from './SignIn.scss';

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      loginUser: loginUser
    },
    dispatch
  );
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      redirectToUserPreference: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(formValue) {
    this.props.loginUser(formValue);
  }

  componentWillReceiveProps(nextProps) {
    setStorage('user', nextProps.user.user.user);
    setStorage('token', nextProps.user.user.token);
    this.setState({
      user: { ...nextProps.user },
      redirectToUserPreference: true
    });
  }

  render() {
    const { redirectToUserPreference } = this.state;

    if (redirectToUserPreference) {
      return <Redirect to="UserPreference" />;
    }

    return (
      <div className={styles.signin_container}>
        <SignInForm handleLogin={this.handleLogin} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
