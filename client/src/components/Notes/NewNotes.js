import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Notes.css';

class NewNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title, body: this.props.body, onSave:(mode)=> this.props.onSave(mode), open: false };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  showModal(e) {
    this.setState({ open: !this.state.open })
  }


  handleChangeTitle(event) {
    this.setState({ title: event.target.value });

    if ((this.state.title !== null) && (this.state.body !== null)) {
      document.getElementById("submitError").style.visibility = "hidden";
      document.getElementById("submitOK").style.visibility = "visible";
    } else {
      document.getElementById("submitError").style.visibility = "visible";
      document.getElementById("submitOK").style.visibility = "hidden";
    }
  }

  handleChangeBody(event) {
    this.setState({ body: event.target.value });
    if (this.state.title !== null && this.state.body !== null) {
      document.getElementById("submitError").style.visibility = "hidden";
      document.getElementById("submitOK").style.visibility = "visible";

    } else {
      document.getElementById("submitError").style.visibility = "visible";
      document.getElementById("submitOK").style.visibility = "hidden";
    }
  }
  handleSubmit(event) {
    if (this.state.title.length === 0 || this.state.body.length === 0) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form">
          <label>Title:</label>
          <input type="text" value={this.state.title} onInput={this.handleChangeTitle} required />
          <label>Body:</label>
          <textarea type="text" className="newNote_body" id="newNotes_body" value={this.state.body} onInput={this.handleChangeBody} required>
          </textarea>
          <div id="submitError">
            <input type="button" variant="contained" value="Save Note" />
          </div>
          <div id="submitOK" className="submitOK" onClick={(e) => this.state.onSave()}>
            <input type="button" variant="contained" value="Save Note" />
          </div>

        </form>
        {this.state.open ? (
          <Modal body="Success" />
        ) : null}
      </div>

    );
  }
}
export default NewNotes;