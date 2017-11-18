import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/userActions';
import SignUpForm from '../components/SignUpForm';

const mapStateToProps = (state, ownProps) => {
  return {
    form: state.form
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    signUpUser
  }, dispatch);
}

class SignUp extends React.Component {
  constructor (props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup (formValue) {
    this.props.signUpUser(formValue);
  }

  render () {
    return (
      <SignUpForm handleSignup={ this.handleSignup } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);