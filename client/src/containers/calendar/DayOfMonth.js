import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Day from '../../components/calendar/DayOfMonth';
import * as actions from '../../actions/modal';

export class DayOfMonth extends React.Component {
  render() {
    return (
      <Day
        data={this.props.data} events={this.props.events}
        handleShow={this.props.actions.handleShow} />
    );
  }
}

DayOfMonth.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    show: state.modal.show
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
)(DayOfMonth);