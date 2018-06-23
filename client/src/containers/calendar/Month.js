import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Month from '../../components/calendar/Month';

Month.propTypes = {
  monthData: PropTypes.array.isRequired,
  eventData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    monthData: state.calendar.month,
    eventData: state.events.data
  };
}

export default connect(
  mapStateToProps,
  {}
)(Month);