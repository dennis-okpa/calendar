import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DateField from '../../components/common/DateField';
import * as actions from '../../actions/modal';

export class InputFieldView extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.props.actions.addInput(this.props.id, value);
  }
  render() {
    const value = this.props.data[this.props.id];
    return (
      <DateField {...this.props} value={value||""} onChange={this.onChange} />
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