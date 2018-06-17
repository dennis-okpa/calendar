import React from 'react';
import {connect} from 'react-redux';
import Event from '../../components/calendar/Event';

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
      <Event event={this.props.event} _this={this} />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(EventView);