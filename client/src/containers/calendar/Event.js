import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Event from '../../components/calendar/Event';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/events';

export class EventView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = e => {
      this.setState({ target: e.target, show: !this.state.show });
    };
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <Event event={this.props.event} editEvent={this.props.actions.editEvent} />
    );
  }
}

EventView.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventView);