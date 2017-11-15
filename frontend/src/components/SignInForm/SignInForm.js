import React from "react";
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui'
import { Well, Panel, Button, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import styles from "./SignInForm.scss";

class SignInForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, handleLogin, pristine, submitting } = this.props

    return (
      <form name="SignInForm" onSubmit={ handleSubmit((e) => handleLogin(e)) }>
        <Well>
          <Panel>
              <Col xs={6} md={6}>
                <div>
                  <h3>Login</h3>
                  <div className="form-group">
                    <label className={ styles.loginLabel } htmlFor="username">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </label>
                    <Field
                      id="username"
                      name="username"
                      component={ TextField }
                      autoComplete="off"
                      hintText="Username"
                      type="text" />
                  </div>

                  <div className="form-group">
                    <label className={ styles.loginLabel } htmlFor="password">
                      <i className="fa fa-key" aria-hidden="true"></i>
                    </label>
                    <Field
                      id="password"
                      name="password" 
                      component={ TextField }
                      hintText="Password"
                      type="password" />
                  </div>

                  <Button type="submit" 
                    className="btn btn-default" 
                    disabled={ pristine || submitting }
                    bsSize="large" block>
                    Login
                  </Button>
                </div>
              </Col>

              <Col xs={6} md={6}>
                <div>
                  <h3>Don't have an Account? </h3>
                  <Link to="/signup">Register Now?</Link>
                </div>
              </Col>
          </Panel>
        </Well>

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
      </form>
    );
  }
}

export default reduxForm({ form: 'SignInForm' })(SignInForm);