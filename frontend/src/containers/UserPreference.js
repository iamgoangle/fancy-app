import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserProfile, updateUserPreference } from '../actions/userActions';

import TopPane from '../components/UserPreperence/TopPane';
import LeftPane from '../components/UserPreperence/LeftPane';
import RightPane from '../components/UserPreperence/RightPane';

import { getCurrencies } from '../services/currency-service';
import { getLanguages } from '../services/language-service';
import { getTimezones } from '../services/timezone-service';

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
class UserPreference extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currencies: [],
      languages: [],
      timezones: []
    };

    this.props.getUserProfile(window.localStorage.getItem('user'));
  }

  async componentDidMount () {
    this.setState({ currencies: await getCurrencies() });
    this.setState({ languages: await getLanguages() });
    this.setState({ timezones: await getTimezones() });
  }

  render () {
    return (
      <div>
        <TopPane />
        <LeftPane />
        <RightPane
          currencies={ this.state.currencies.data }
          languages={ this.state.languages.data }
          timezones={ this.state.timezones.data } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPreference);