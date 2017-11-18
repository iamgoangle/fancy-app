import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';

class SignUp extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <SignUpForm />
    )
  }
}

export default SignUp;