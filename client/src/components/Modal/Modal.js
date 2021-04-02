import React from 'react';
import './Modal.css';



class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(e) {
    window.location.reload();
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div  >
        {this.state.open ? (
          <div className="Modal">
            <div className="modal_content">{this.props.body}</div>
            <input type="button" value="OK" className="modal_close" onClick={(e) => this.hideModal(e)} />
          </div>
        ) : null}

      </div>
    );
  }
}

export default Modal;
