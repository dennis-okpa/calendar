import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CalendarDiv from '../../components/calendar';
import * as actions from '../../actions/events';
import * as cal_actions from '../../actions/calendar';

export class Calendar extends React.Component {
  getMonth = () => {
    const { date } = this.props.calendar;
    const locale = "en-us";
    return date.toLocaleString(locale, { month: "long" });
  };
  getNextMonth = () => {
    const { date } = this.props.calendar;
    const nextDate = new Date(date.getTime());
    nextDate.setMonth(nextDate.getMonth()+1);
    return "?year=" + nextDate.getFullYear() + "&month=" + nextDate.getMonth();
  };
  getPreviousMonth = () => {
    const { date } = this.props.calendar;
    const nextDate = new Date(date.getTime());
    nextDate.setMonth(nextDate.getMonth()-1);
    return "?year=" + nextDate.getFullYear() + "&month=" + nextDate.getMonth();
  };
  render() {
    return (
      <CalendarDiv
        previousMonth={this.getPreviousMonth()}
        nextMonth={this.getNextMonth()}
        monthTitle={this.getMonth()}
        calendarDate={this.props.calendarDate}
        handleSave={this.props.actions.handleSave}
        handleDelete={this.props.actions.handleDelete} />
    );
  }
}

Calendar.propTypes = {
  calendar: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  cal_actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    calendar: state.calendar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    cal_actions: bindActionCreators(cal_actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);