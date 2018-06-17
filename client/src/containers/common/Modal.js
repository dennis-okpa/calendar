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
        title={this.props.title}
        className={this.props.className}
        handleSave={this.props.handleSave}
        handleClose={this.props.actions.handleClose}>
        {this.props.children}
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    show: state.modal.show,
    title: state.modal.title
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