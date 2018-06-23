import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EventForm from '../../components/calendar/EventForm';
import * as actions from '../../actions/repeat';

export class EventFormView extends React.Component {
  componentDidMount(){
    this.props.actions.fetchRepeatOptions();
  }
  render() {
    return (
      <EventForm repeatOptions={this.props.repeatOptions} />
    );
  }
}

EventFormView.propTypes = {
  actions: PropTypes.object.isRequired,
  repeatOptions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    repeatOptions: state.repeat.options || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventFormView);