import React from 'react';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import styles from './LeftPane.scss';

class LeftPane extends React.Component {
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
      <div>
        <Col md={ 1 }></Col>
        <Col md={ 3 }>
          <section className={ styles.left_pane }>
            <nav>
              <ListGroup>
                <ListGroupItem href="#link1">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>Edit Profile</span>
                </ListGroupItem>
                <ListGroupItem href="#" bsStyle="success">
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>Preference</span>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>Password</span>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>Notification</span>
                </ListGroupItem>
                <ListGroupItem onClick={ () => { alert('test'); } }>
                  <i className="fa fa-list" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>Test</span>
                </ListGroupItem>
              </ListGroup>
            </nav>
          </section>
        </Col>
      </div>
    )
  }
};

export default LeftPane;