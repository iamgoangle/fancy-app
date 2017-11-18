import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui'
import { Well, Panel, Button, Col, Row, Clearfix } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./SignUpForm.scss";

class SignUpForm extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const textfieldStyles = {
      floatingLabelStyle: {
        color: '#FFF'
      },
      hintStyle: {
        color: '#c4c4c4'
      }
    };
    return (
      <form onSubmit={ handleSubmit }>
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
                  className={ styles.textfield }
                  floatingLabelText="Username"
                  floatingLabelStyle={ textfieldStyles.floatingLabelStyle }
                  component={ TextField }
                  autoComplete="off"
                  hintText="Specific your username"
                  hintStyle={textfieldStyles.hintStyle}
                  type="text"
                  fullWidth={ true } />
              </div>

              <div>
                <Field
                  id="password"
                  name="password"
                  className={ styles.textfield }
                  floatingLabelText="Password"
                  floatingLabelStyle={ textfieldStyles.floatingLabelStyle }
                  component={ TextField }
                  autoComplete="off"
                  hintText="Choose your password"
                  hintStyle={textfieldStyles.hintStyle}
                  type="text"
                  fullWidth={ true } />
              </div>

              <div>
                <Button 
                  bsSize="large" 
                  disabled={ pristine || submitting }
                  bsStyle="info" 
                  block>
                  Sign me up!
                </Button>
              </div>
            </Col>
          </Row>
          <Clearfix />
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'SignUpFform' })(SignUpForm);