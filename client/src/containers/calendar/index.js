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
     this.props.actions.fetchEvents();
  }
  render() {
    return (
      <CalendarDiv
        monthTitle={this.getMonth()}
        calendarDate={this.props.calendarDate} />
    );
  }
}

Calendar.propTypes = {
  calendarDate: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    calendarDate: state.calendar.date
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
