import React from 'react';
import {
    Redirect
  } from "react-router-dom";
import Note from './Note';
import './Notes.css';

function Notes() {
  
    const [showNew, showNewNotes] = React.useState(false);
    const handleNew = () => showNewNotes(!showNew);
    const ShowNotes = () => (
        <div className='cards__container'>
        <Redirect push
            to={{
            pathname: "/newnote",
            state: { title: "", body: "" }
          }}
        />
        
        </div>
    )


  return (
    <div class="container">
      <h1>Notes</h1>
      <h3 className="create_newNotes"onClick={handleNew}>Create new notes</h3>
      { showNew ? <ShowNotes /> : null }      
      <Note />
      <Note />  
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default Notes;
