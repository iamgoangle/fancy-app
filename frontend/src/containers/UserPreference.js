import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateUserPreference } from '../actions/userActions'

import TopPane from '../components/UserPreperence/TopPane';
import LeftPane from '../components/UserPreperence/LeftPane';
import RightPane from '../components/UserPreperence/RightPane';

const mapStateToProps = (state, ownProps) => {
  return {
    form: state.user,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    updateUserPreference
  }, dispatch);
}
class UserPreference extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <TopPane />
        <LeftPane />
        <RightPane />
      </div>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPreference);