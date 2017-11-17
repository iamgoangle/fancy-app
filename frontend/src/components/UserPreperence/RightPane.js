import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserProfile, updateUserPreference } from '../../actions/userActions';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {
  Row,
  Col,
  Panel,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  Radio,
  Button
} from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import styles from './LeftPane.scss';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getUserProfile,
    updateUserPreference
  }, dispatch);
}
class RightPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'User Preference',
      // save this value to db collection
      privacy: {
        profileVisibility: [
          {
            id: 0,
            value: 'Everyone'
          }, {
            id: 1,
            value: 'Private'
          }
        ],
        message: [
          {
            id: 0,
            value: 'Everyone'
          },
          {
            id: 1,
            value: 'People you follow'
          },
          {
            id: 3,
            value: 'No one'
          }
        ]
      },
      content: {
        categoryList: [
          {
            id: 0,
            value: 'Enable'
          },
          {
            id: 1,
            value: 'Disable'
          }
        ]
      }
    };
  }

  handleUserTopNavChange(value) {
    this.setState({ top: { usermenu: value } });
  }

  handleOnChangeLanguage (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.language = value;
    this.props.updateUserPreference(user);
  }

  handleOnChangeTimeZone (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.timezone = value;
    this.props.updateUserPreference(user);
  }

  handleOnChangeMessage (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.message = value;
    this.props.updateUserPreference(user);
  }

  handleOnChangeCurrency (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.currency = value;
    this.props.updateUserPreference(user);
  }

  handleOnChangeProfileVisibility (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.profile_visibility = value;
    this.props.updateUserPreference(user);
  }

  handleOnChangeProfileMessage (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.message = value;
    this.props.updateUserPreference(user);
  }

  handleOnChangeContentCategoryList (e) {
    const value = e.target.value;
    let user = { ...this.props.user.user };
    user.profile.category_list = value;
    this.props.updateUserPreference(user);
  }

  handleOnSubmitUserPreference () {
    alert('submit change');
    console.log(this.props.user);
  }
  
  render() {
    const { title } = this.state;
    const currencies = this.props.currencies || [];
    const timezones = this.props.timezones || [];
    const languages = this.props.languages || [];

    const user = this.props.user.user;
    
    return (
      <div>
        <Col md={1} />
        <Col md={6}>
          <section className={ styles.right_pane }>
            <Panel header={ title } bsStyle="success">
              <Row>
                <Col md={3}>
                  <div>Localiazation</div>
                </Col>
                <Col md={9}>
                  <FormGroup>
                    <ControlLabel>Language</ControlLabel>
                    <FormControl 
                      componentClass="select" 
                      placeholder="select"
                      value={ user.profile.language }
                      onChange={ e => this.handleOnChangeLanguage(e) }
                     >
                      <option value="select">select</option>
                      { 
                        languages.map(
                          (language, i) => (
                            <option
                              key={ language.id } 
                              value={ language.id }>
                                { language.value }
                            </option>
                          )
                        )
                      } 
                    </FormControl>
                    <HelpBlock>
                      Interested in helping translate Fancy?{' '}
                      <Link to="#">Let us know.</Link>
                    </HelpBlock>
                  </FormGroup>

                  <FormGroup controlId="TimeZone">
                    <ControlLabel>Time zone</ControlLabel>
                    <FormControl 
                      componentClass="select" 
                      placeholder="select"
                      value={ user.profile.timezone }
                      onChange={ e => this.handleOnChangeTimeZone(e) }>
                      <option value="select">select</option>
                      { 
                        timezones.map(
                          (timezone, i) => (
                            <option 
                              key={ timezone.id } 
                              value={ timezone.id }>
                                { timezone.value }
                            </option>
                          )
                        )
                      } 
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="Currency">
                    <ControlLabel>Currency</ControlLabel>
                    <FormControl 
                      componentClass="select" 
                      placeholder="select"
                      value={ user.profile.currency }
                      onChange={ e => this.handleOnChangeCurrency(e) }>
                      <option value="select">select</option>
                      { 
                        currencies.map(
                          (currency, i) => (
                            <option 
                              key={ currency.id } 
                              value={ currency.id }>
                                { currency.value }
                            </option>
                          )
                        )
                      } 
                    </FormControl>
                  </FormGroup>
                </Col>
              </Row>

              <Divider />

              <Row>
                <Col md={3}>
                  <div>Privacy</div>
                </Col>
                <Col md={9}>
                  <div>
                    <label>Profile visibility</label>
                    <HelpBlock>
                      Manage who can see your activity, things your fancy, your
                      follower, people you follow or in anyone's search results.
                    </HelpBlock>
                    <FormGroup>
                      {
                        this.state.privacy.profileVisibility.map(
                          (v, i) => (
                            <Radio name="radio_profile_visibility"
                              key={ i }
                              inline
                              checked={ user.profile.profile_visibility == v.id }
                              onChange={ e => this.handleOnChangeProfileVisibility(e) }
                              value={ v.id }>
                              { v.value }
                            </Radio>
                          )
                        )
                      }
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Messages</ControlLabel>
                      <HelpBlock>Control who can send you messages.</HelpBlock>
                      {
                        this.state.privacy.message.map(
                          (v, i) => (
                            <Radio name="radio_message"
                              key={ i }
                              inline
                              checked={ user.profile.message == v.id }
                              onChange={ e => this.handleOnChangeProfileMessage(e) }
                              value={ v.id }>
                              { v.value }
                            </Radio>
                          )
                        )
                      }
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Recently viewed</ControlLabel>
                      <HelpBlock>Manage your Fancy browsing history.</HelpBlock>
                      <Link to="#">Delete all items</Link>
                    </FormGroup>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <div>Content</div>
                </Col>
                <Col md={9}>
                  <FormGroup>
                    <ControlLabel>Category lists</ControlLabel>
                    <HelpBlock>
                      Automatically add Fancy'd items to the Category list.
                    </HelpBlock>
                    {
                      this.state.content.categoryList.map(
                        (v, i) => (
                          <Radio name="radio_category_list"
                            key={i}
                            inline
                            checked={ user.profile.category_list == v.id }
                            onChange={ e => this.handleOnChangeContentCategoryList(e) }
                            value={ v.id }>
                            { v.value }
                          </Radio>
                        )
                      )
                    }
                  </FormGroup>
                </Col>
              </Row>

              <Divider />
              <Divider />

              <Row>
                <Col md={3} />
                <Col md={9}>
                  <FormGroup>
                    <Button onClick={ () => this.handleOnSubmitUserPreference() }>
                      Save Preference
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
              
            </Panel>
          </section>
        </Col>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPane);
