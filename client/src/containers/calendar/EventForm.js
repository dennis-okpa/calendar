import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EventForm from '../../components/calendar/EventForm';
import * as actions from '../../actions/events';

export class EventFormView extends React.Component {
  render() {
    return (
      <EventForm data={this.props.data} />
    );
  }
}

EventFormView.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.modal.data || {}
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