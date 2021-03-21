import React from 'react';
import Modal from '../Modal/Modal';
import './NewForum.css';

class NewForum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
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
    if (this.state.title.length !== 0 && this.state.body.length !== 0) {
      document.getElementById("submitError").style.visibility = "hidden";
      document.getElementById("submitOK").style.visibility = "visible";
    } else {
      document.getElementById("submitError").style.visibility = "visible";
      document.getElementById("submitOK").style.visibility = "hidden";
    }
  }

  handleChangeBody(event) {
    this.setState({ body: event.target.value });
    if (this.state.title.length !== 0 && this.state.body.length !== 0) {
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
      <div className="new_post">
        <form >
          <label>Title:</label>
          <input type="text" value={this.state.title} onInput={this.handleChangeTitle} required />
          <label>Body:</label>
          <textarea type="text" id="newpost_body" value={this.state.body} onInput={this.handleChangeBody} required>
          </textarea>
          <div id="submitError">
            <input type="submit" variant="contained" value="Post" />
          </div>
          <div id="submitOK" className="submitOK">
            <input type="button" variant="contained" value="Post" onClick={(e) => this.showModal(e)} />
          </div>
          {this.state.open ? (
            <Modal body="Posted Successfully" />
          ) : null}
        </form>
      </div>
    );
  }
}
export default NewForum;