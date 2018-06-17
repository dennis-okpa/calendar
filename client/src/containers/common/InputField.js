import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputField from '../../components/common/InputField';
import * as actions from '../../actions/modal';

export class InputFieldView extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value : props.data[this.props.id] || ""
    };
  }
  handleChange(event) {
    this.props.actions.addInput(this.props.id, event.currentTarget.value);
    this.setState({ value: event.currentTarget.value });
  }
  render() {
    return (
      <InputField {...this.props} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

InputFieldView.propTypes = {
  data: PropTypes.object.isRequired
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
)(InputFieldView);