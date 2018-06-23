import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CalendarDiv from '../../components/calendar';
import * as actions from '../../actions/events';

export class Calendar extends React.Component {
  getMonth = () => {
    const { date } = this.props.calendar;
    const locale = "en-us";
    return date.toLocaleString(locale, { month: "long" });
  };
  componentDidMount(){
    const { firstDay, lastDay, month } = this.props.calendar;
    this.props.actions.fetchEvents(firstDay, lastDay, month);
  }
  render() {
    return (
      <CalendarDiv
        monthTitle={this.getMonth()}
        calendarDate={this.props.calendarDate}
        handleSave={this.props.actions.handleSave}
        handleDelete={this.props.actions.handleDelete} />
    );
  }
}

Calendar.propTypes = {
  calendar: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    calendar: state.calendar
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
)(Calendar);