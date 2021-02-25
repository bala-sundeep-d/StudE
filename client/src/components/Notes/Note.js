import React, { useState } from 'react';
import './Notes.css';
import {Route, Switch,BrowserRouter as Router, Redirect, useLocation} from 'react-router-dom';

  const Note = (props) => {
    const location = useLocation();
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
        
     <Collapsible title={props.title} body={props.body} noteId={props.noteId}/>
      </div>
  );
}

export default Note;

class Collapsible extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        nid:this.props.nid,
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
        {this.props.title}
    </div>
    {this.state.open ? (
    <Redirect push
    to={{
        pathname: `${location.pathname}/${this.props.noteId}`,
    state: { title: `${this.props.title}`,body:`${this.props.body}` }
  }}
/>
    ) : null}
    </div>);
    }
    }
    