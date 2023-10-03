import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "6516b19fcb0b13c2474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9e0b3852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        },
        {
          "_id": "6516b19fcb0b13c2474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9e0b3852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        },
        {
          "_id": "6516b19fcb0b13c2474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9e0b3852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        }, {
          "_id": "6516b19fcb0b13c2474c47d3",
          "user": "650f10605bf60437dc513f8f",
          "title": "Learning Path",
          "description": "Complete React Course",
          "tag": "study",
          "date": "2023-09-29T11:14:39.462Z",
          "__v": 0
        },
        {
          "_id": "6516f8a172bd9e0b3852897b",
          "user": "650f10605bf60437dc513f8f",
          "title": "Go To BED",
          "description": "sleep on time",
          "tag": "personal",
          "date": "2023-09-29T16:17:37.951Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;