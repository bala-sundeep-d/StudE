import React, { useState } from 'react';
import './Notes.css';
import {Route, Switch,BrowserRouter as Router, Redirect, useLocation } from 'react-router-dom';

  const Note = (props) => {
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
        {props.title}       
        </div>
      
      </div>
  );
}

export default Note;

const Collapsible = (props) => {
  const nid = props.nid;
  const location = useLocation();
  const [open, togglePanel] = useState(false);

    return (<div>
    <div onClick={(e)=>togglePanel(!open)} className="notes_title">
        {props.title}
    </div>
    {open ? (
    <Redirect
    to={{
        pathname: `${location.pathname}/notes?nid=${nid}`,
    state: { title: `${props.title}`,body:`${props.body}` }
  }}
/>
    ) : null}
    </div>);
    }
    