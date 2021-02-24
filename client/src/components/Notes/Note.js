import React from 'react';
import './Notes.css';
import {
    Redirect
  } from "react-router-dom";

function Note() {

    const [showOptions, showNotesOptions] = React.useState(false);
    const handleShowOptions = () => showNotesOptions(!showOptions);
    const ShowNotesOptions = () => (
      <div className="options_content">
              <a href="/">Edit</a>
              <a href="/">Delete</a>
      </div>
    )


  return (
    
      <div className="notes">  
        <div className="notes_options">
          <i onClick={handleShowOptions} className="fas fa-ellipsis-h"/>
          { showOptions ? <ShowNotesOptions /> : null }          
        </div>
     <Collapsible />
      </div>
  );
}

export default Note;

class Collapsible extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
    this.setState({open: !this.state.open})
    }
    render() {
    return (<div>
    <div onClick={(e)=>this.togglePanel(e)} className="notes_title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    {this.state.open ? (
    <Redirect push
    to={{
    pathname: "/newnote",
    state: { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
  }}
/>
    ) : null}
    </div>);
    }
    }
    