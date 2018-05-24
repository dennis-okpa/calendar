import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CalendarDiv from '../../components/calendar';
import * as actions from '../../actions/events';

export class Calendar extends React.Component {
  getMonth = () => {
    const { calendarDate } = this.props;
    const locale = "en-us";
    return calendarDate.toLocaleString(locale, { month: "long" });
  };
  componentDidMount(){
    const { calendarDate } = this.props;
    this.props.actions.fetchEvents(calendarDate.getMonth()+1, calendarDate.getFullYear());
  }
  render() {
    return (
      <CalendarDiv
        monthTitle={this.getMonth()}
        calendarDate={this.props.calendarDate}
        events={this.props.events}/>
    );
  }
}

Calendar.propTypes = {
  calendarDate: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    calendarDate: state.calendar.date,
    events: state.events.items
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
