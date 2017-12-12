import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Button, HelpBlock } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import styles from './SignInForm.scss';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);
class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, handleLogin, pristine, submitting } = this.props;
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
      <div className={styles.container}>
        <form name="SignInForm" onSubmit={handleSubmit(e => handleLogin(e))}>
          <section>
            <div>
              <img
                width="128"
                height="128"
                src="/images/fancy_logo.png"
                alt="Fancy App Logo"
              />
            </div>

            <div className={styles.sign_in_form_control}>
              <div>
                <h3>
                  Fancy App (<i
                    className="fa fa-code-fork"
                    aria-hidden="true"
                  />{' '}
                  1.0.0)
                </h3>
                <div className="form-group">
                  <Field
                    id="username"
                    name="username"
                    component={renderTextField}
                    autoComplete="off"
                    label="Username"
                    hintText="Type your username"
                    inputStyle={textfieldStyles.hintStyle}
                    floatingLabelStyle={textfieldStyles.floatingLabelStyle}
                    hintStyle={textfieldStyles.hintStyle}
                    fullWidth={true}
                    type="text"
                  />
                </div>

                <div className="form-group">
                  <Field
                    id="password"
                    name="password"
                    component={renderTextField}
                    label="Password"
                    hintText="Type your password"
                    inputStyle={textfieldStyles.hintStyle}
                    floatingLabelStyle={textfieldStyles.floatingLabelStyle}
                    hintStyle={textfieldStyles.hintStyle}
                    fullWidth={true}
                    type="password"
                  />
                </div>

                <Button
                  type="submit"
                  id="submit"
                  className="btn btn-default"
                  disabled={pristine || submitting}
                  bsSize="large"
                  block
                >
                  Login
                </Button>
                <HelpBlock>or</HelpBlock>
                <Link className={styles.link_signme_up} to="/signup">
                  Sign me up!
                </Link>
              </div>
            </div>
          </section>
          <footer className={styles.copyright}>
            <i className="fa fa-beer" aria-hidden="true"></i>
            {' '}
            <span>iamgoangle</span>
          </footer>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'SignInForm' })(SignInForm);
