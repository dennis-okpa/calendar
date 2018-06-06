import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import InputField from '../../components/common/InputField';

export class InputFieldView extends React.Component {
  render() {
    return (
      <InputField {...this.props} defaultValue={this.props.data[this.props.id]||""} />
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

export default connect(
  mapStateToProps,
  {}
)(InputFieldView);