import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Modal from '../../components/common/Modal';
import * as actions from '../../actions/modal';

export class CustomModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        handleClose={this.props.actions.handleClose} />
    );
  }
}

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
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
)(CustomModal);