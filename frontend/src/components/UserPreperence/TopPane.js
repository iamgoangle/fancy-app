import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { Row, Col, Clearfix } from 'react-bootstrap';

import styles from './TopPane.scss';

class TopPane extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top: {
        usermenu: 1
      }
    };
  }

  handleUserTopNavChange (value) {
    this.setState({ top: { usermenu: value } });
  }

  render () {
    return (
      <header className={ styles.top_pane }>
        <Row>
          <Col md={1}>
            <div className={ styles.label_header }>
              <i className="fa fa-github-alt" aria-hidden="true"></i>
            </div>
          </Col>
          <Col md={3}>
            <div className={ styles.label_app_name }>
              FANCY APP
            </div>
          </Col>
          <Col md={3}>
            
          </Col>
          <Col md={1}>
            
          </Col>
          <Col md={4}>
            <nav className={ styles.nav_header_list }>
              <ul>
                <li>
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-inbox" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-flash" aria-hidden="true"></i>
                </li>
                <li>
                  <div className={ styles.nav_header_you_dropdown }>
                    <DropDownMenu
                      value={ this.state.top.usermenu } 
                      onChange={ this.handleUserTopNavChange }>
                      <MenuItem value={1} primaryText="You" />
                      <MenuItem value={4} primaryText="Change Password" />
                      <MenuItem value={5} primaryText="Logout" />
                    </DropDownMenu>
                  </div>                  
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
        <Clearfix />
      </header>
    )
  }
};

export default TopPane;