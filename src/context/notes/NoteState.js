import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Add all note
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZjEwNjA1YmY2MDQzN2RjNTEzZjhmIn0sImlhdCI6MTY5NTk3Nzg0NX0.xbyVbNxnfOngjRCjtww2AugXUAR9pJhQjN5xRcrcLl0"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZjEwNjA1YmY2MDQzN2RjNTEzZjhmIn0sImlhdCI6MTY5NTk3Nzg0NX0.xbyVbNxnfOngjRCjtww2AugXUAR9pJhQjN5xRcrcLl0"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    console.log('adding a new note')
    const note = {
      "_id": "6516f238a172bd9e00b3852897b",
      "user": "650f10605bf60437dc513f8f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-09-29T16:17:37.951Z",
      "__v": 0
    };
    setNotes(notes.concat(note));

  }

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZjEwNjA1YmY2MDQzN2RjNTEzZjhmIn0sImlhdCI6MTY5NTk3Nzg0NX0.xbyVbNxnfOngjRCjtww2AugXUAR9pJhQjN5xRcrcLl0"
      },
    });
    const json = await response.json();
    console.log(json);

    console.log('deleting the note with id: ' + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZjEwNjA1YmY2MDQzN2RjNTEzZjhmIn0sImlhdCI6MTY5NTk3Nzg0NX0.xbyVbNxnfOngjRCjtww2AugXUAR9pJhQjN5xRcrcLl0"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json)

    // Logic to edit in clientg
    for (let index = 0; index < notes.length; index++) {
      const note = notes[index];
      if (note._id === id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;