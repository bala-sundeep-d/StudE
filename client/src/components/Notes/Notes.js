import React, { useState, useEffect }  from 'react';
import {
  Redirect, useLocation
} from "react-router-dom";
import NewNotes,{save} from './NewNotes';
import Note from './Note';
import './Notes.css';
import _ from 'lodash';
import axios from 'axios';



const Notes = () => {

  const [notesArray, addNotes] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getAllNotes = "/notes?subjectId=11";

    axios.get(getAllNotes).then(response => {
        let notes = response.data;
        const temp = notesArray.concat(notes);
        if (!notesArray || notes.length !== notesArray.length) addNotes(_.filter(temp), (item) => item !== null);
    });

}, [notesArray]);

  

  const [state, setState] = React.useState("view");
  const [noteId, setNoteId] = React.useState();

  function toggleView  (mode, noteid)  {   
    setState(mode)
    setNoteId(noteid)
  }

  return (
    <div>
    {state === 'view' ? (
      <div className="notes_container">
      <h1>Notes</h1>
      <h3 className="create_newNotes" onClick={()=>toggleView('edit')} >Create new notes</h3>
      
      {
        notesArray.map((note, index) => 
        (<div onClick={()=>toggleView('edit',index)}>
        <Note key={index} title={note.title} message={note.message} noteId={index} onSave={()=>toggleView("view")} />
        </div>)
        )
      }

    </div>    
    )
    :
    (<NewNotes noteId={notesArray[`${noteId}`]&& notesArray[`${noteId}`]._id} title={notesArray[`${noteId}`]&& notesArray[`${noteId}`].title} body={notesArray[`${noteId}`]&& notesArray[`${noteId}`].message} />)
    }
    </div>
  );
}

export default Notes;
