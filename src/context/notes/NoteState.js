import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "6516b19fcb0b13c23474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9e0b43852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        },
        {
          "_id": "6516b19fcb0b13c25474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9e0b36852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        },
        {
          "_id": "6516b19fc7b0b13c2474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9458e0b3852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        }, {
          "_id": "6516b1219fcb0b13c2474c497d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f238a172bd9e00b3852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

      // Add a note
      const addNote = (title, description, tag) => {
        // TODO: API Call
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
      const deleteNote = (id) => {
        // TODO: API Call
        console.log('deleting the note with id: ' + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
      }

      // Edit a note
      const editNote = (id, title, description, tag) => {
        // API Call

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
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;