import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { Col, Panel } from 'react-bootstrap';

import styles from './LeftPane.scss';

class RightPane extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'User Preference'
    };
  }

  handleUserTopNavChange (value) {
    this.setState({ top: { usermenu: value } });
  }

  render () {
    const { title } = this.state;
    return (
      <div>
        <Col md={ 1 }></Col>
        <Col md={ 6 }>
          <section className={ styles.right_pane }>
            <Panel header={ title } bsStyle="success">
              test
            </Panel>
          </section>
        </Col>
      </div>
    )
  }
};

export default RightPane;