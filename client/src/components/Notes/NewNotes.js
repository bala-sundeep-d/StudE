import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Notes.css';
import axios from 'axios';

class NewNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title, body: this.props.body, onSave:(mode)=> this.props.onSave(mode), open: false,status: null };
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
     if(this.props.title || this.props.body){
       this.setState({status: "Updated Successfully"});
      const subjectId = "11";
      const title = this.state.title;
      const message = this.state.body;

      axios.patch('/notes/', { title, message, noteId:this.props.noteId })
        .then(res => {
        });
        this.setState({ open: !this.state.open })
    }
    else if(this.state.title && this.state.body){
      this.setState({status: "Created Successfully"});
      const subjectId = "11";
      const title = this.state.title;
      const message = this.state.body;
    axios.post('/notes/', { subjectId, title, message })
        .then(res => {
        });
        this.setState({ open: !this.state.open })
    }
  }

  showModal(e) {
    this.setState({ open: !this.state.open })
}

  render() {
    return (
      <div className="notes_container">
        <form className="form">
          <label>Title:</label>
          <input type="text" value={this.state.title} onInput={this.handleChangeTitle} required />
          <label>Body:</label>
          <textarea type="text" className="newNote_body" id="newNotes_body" value={this.state.body} onInput={this.handleChangeBody} required>
          </textarea>
          <div id="submitError">
            <input type="button" variant="contained" value="Save Note" />
          </div>
          <div id="submitOK" className="submitOK" onClick={this.handleSubmit}>
            <input type="button" variant="contained" value="Save Note" />
          </div>

        </form>
        {this.state.open ? (
          <Modal body={this.state.status} />
        ) : null}
      </div>

    );
  }
}
export default NewNotes;