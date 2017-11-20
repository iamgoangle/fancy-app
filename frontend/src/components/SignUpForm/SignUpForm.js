import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import { Button, Col, Row, Clearfix } from "react-bootstrap";

import styles from "./SignUpForm.scss";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

// config validate rule
const validate = (values) => {
  const errors = [];
  const requireFields = [
    'username',
    'password'
  ];

  requireFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });

  return errors;
};

const renderTextField = ({
  input,
  floatingLabelText,
  hintText,
  errorStyle,
  warning,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={ hintText }
    floatingLabelText={ floatingLabelText }
    fullWidth={ true }
    errorText={ touched && (error || warning)}
    errorStyle={ errorStyle }
    {...input}
    {...custom}
    />
);

class SignUpForm extends React.Component {
  render () {
    const { handleSubmit, pristine, submitting, handleSignup } = this.props;
    const textfieldStyles = {
      floatingLabelStyle: {
        color: '#FFF'
      },
      hintStyle: {
        color: '#c4c4c4'
      },
      errorStyle: {
        color: '#ffc672'
      }
    };
    
    return (
      <form onSubmit={ handleSubmit(e => handleSignup(e)) }>
        <div className={ styles.signup_form }>
          <Row className={ styles.top_form }>
            <Col xs={9} md={9} className={ styles.header }>
              <div>Hello! New member</div>
              <div>Fill the form below to get instant access:</div>
            </Col>
            <Col xs={3} md={3} className={ styles.logo }>
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </Col>
          </Row>
          <Clearfix />
          <Row className={ styles.content_form }>
            <Col xs={12} md={12}>
              <div>
                <Field
                  id="username"
                  name="username"
                  component={ renderTextField }
                  className={ styles.textfield }
                  floatingLabelText="Username"
                  floatingLabelStyle={ textfieldStyles.floatingLabelStyle }
                  hintText="Specific your username"
                  hintStyle={ textfieldStyles.hintStyle }
                  errorStyle={ textfieldStyles.errorStyle }
                  warning={ !this.props.user.success && this.props.user.message }
                  type="text"
                  autoComplete="off" />
              </div>

              <div>
              <Field
                  id="password"
                  name="password"
                  component={ renderTextField }
                  className={ styles.textfield }
                  floatingLabelText="Password"
                  floatingLabelStyle={ textfieldStyles.floatingLabelStyle }
                  hintText="Choose your password"
                  hintStyle={ textfieldStyles.hintStyle }
                  errorStyle={ textfieldStyles.errorStyle }
                  type="password"
                  autoComplete="off" />
              </div>

              <div>
                <Button 
                  bsSize="large"
                  type="submit"
                  disabled={ pristine || submitting }
                  bsStyle="info"
                  block>
                  Sign me up!
                </Button>
              </div>
            </Col>
          </Row>
          <Clearfix />

          <Row>
            <Col md={12}>
              <div className={ styles.copyright }>
                <i className="fa fa-beer" aria-hidden="true"></i>
                &nbsp;
                <span>
                  <a href="https://github.com/iamgoangle/">iamgoagle</a>
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </form>
    )
  }
}

SignUpForm = connect(mapStateToProps, null)(SignUpForm);
export default reduxForm({ form: 'SignUpFform', validate })(SignUpForm);