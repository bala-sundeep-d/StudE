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
        console.log(notesArray, notes);
    });

}, [notesArray]);

  /*const notesArray = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]*/
  
 /* const handleNew = () => showNewNotes(!showNew);
  const ShowNotes = () => (
    <div className='cards__container'>
      <Redirect push
        to={{
          pathname: `${location.pathname}/new`,
          state: { title: "", body: "" }
        }}
      />

    </div>
  )
  const [showNew, showNewNotes] = React.useState(false);*/

  const [state, setState] = React.useState("view");
  const [noteId, setNoteId] = React.useState();

  function toggleView  (mode, noteid)  {   
    setState(mode)
    setNoteId(noteid)
    console.log(noteid)
    console.log(state)
    console.log(noteId)
  }

  return (
    <div>
    {state === 'view' ? (
      <div className="container">
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
    (<NewNotes title={notesArray[`${noteId}`]&& notesArray[`${noteId}`].title} body={notesArray[`${noteId}`]&& notesArray[`${noteId}`].message} />)
    }
    </div>
  );
}

export default Notes;
