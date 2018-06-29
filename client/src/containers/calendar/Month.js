import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Month from '../../components/calendar/Month';
import * as actions from '../../actions/events';

class MonthView extends React.Component {
  componentDidMount(){
    const { firstDay, lastDay, month } = this.props.calendar;
    this.props.actions.fetchEvents(firstDay, lastDay, month);
  }
  render() {
    const { calendar, eventData } = this.props;
    return (
      <Month monthData={calendar.month} eventData={eventData} />
    );
  }
}

MonthView.propTypes = {
  eventData: PropTypes.object.isRequired,
  calendar: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    calendar: state.calendar,
    eventData: state.events.data,
    actions: PropTypes.object.isRequired
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
)(MonthView);