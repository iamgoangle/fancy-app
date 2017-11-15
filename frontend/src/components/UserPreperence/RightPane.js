import React from 'react';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

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

class RightPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'User Preference'
    };
  }

  handleUserTopNavChange(value) {
    this.setState({ top: { usermenu: value } });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Col md={1} />
        <Col md={6}>
          <section className={styles.right_pane}>
            <Panel header={title} bsStyle="success">
              <Row>
                <Col md={3}>
                  <div>Localiazation</div>
                </Col>
                <Col md={9}>
                  <FormGroup>
                    <ControlLabel>Language</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      {/* <option value="select">select</option>
                    { 
                      this.props.languages.map(
                        (language, i) => (
                          <option
                            key={ language.id } 
                            value={ language.id }>
                              { language.lang }
                          </option>
                        )
                      )
                    }  */}
                    </FormControl>
                    <HelpBlock>
                      Interested in helping translate Fancy?{' '}
                      <Link to="#">Let us know.</Link>
                    </HelpBlock>
                  </FormGroup>

                  <FormGroup controlId="TimeZone">
                    <ControlLabel>Time zone</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      {/* <option value="select">select</option>
                    { 
                      this.props.timezones.map(
                        (timezone, i) => (
                          <option 
                            key={ timezone.id } 
                            value={ timezone.id }>
                              { timezone.value }
                          </option>
                        )
                      )
                    }  */}
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="Currency">
                    <ControlLabel>Currency</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      {/* <option value="select">select</option>
                    { 
                      this.props.currencies.map(
                        (currency, i) => (
                          <option 
                            key={ currency.id } 
                            value={ currency.id }>
                              { currency.value }
                          </option>
                        )
                      )
                    }  */}
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
                      <Radio name="profile_visibility">Test</Radio>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Messages</ControlLabel>
                      <HelpBlock>Control who can send you messages.</HelpBlock>
                      <Radio name="profile_visibility">Test</Radio>
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
                    <Radio>Test</Radio>
                  </FormGroup>
                </Col>
              </Row>

              <Divider />
              <Divider />

              <Row>
                <Col md={3} />
                <Col md={9}>
                  <FormGroup>
                    <Button>
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

export default RightPane;
