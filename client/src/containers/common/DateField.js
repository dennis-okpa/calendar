import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DateField from '../../components/common/DateField';

export class InputFieldView extends React.Component {
  onChange(e) {
    
  }
  render() {
    const value = new Date(Number(this.props.data[this.props.id]));
    return (
      <DateField {...this.props} value={value||""} />
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