import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';

export default function AddNote(props) {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (note.title.length < 5) {
      setShowTitleError(true);
    } else {
      setShowTitleError(false);
    }

    if (note.description.length < 5) {
      setShowDescriptionError(true);
    } else {
      setShowDescriptionError(false);
    }

    if (note.title.length >= 5 && note.description.length >= 5) {
      addNote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "" });
      props.showAlert("Note added successfully", "success");
    }
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });

    // Hide the error message when the user starts typing again
    if (e.target.name === "title" && e.target.value.length >= 5) {
      setShowTitleError(false);
    }

    if (e.target.name === "description" && e.target.value.length >= 5) {
      setShowDescriptionError(false);
    }
  }

  return (
    <div className="container my-3">
      <h2 style={{ fontFamily: "'Tangerine', cursive" }}>Add a Note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className={`form-control ${showTitleError ? 'is-invalid' : ''}`} value={note.title} minLength={5} required id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
          {showTitleError && <div className="invalid-feedback">Title must be 5 characters or longer.</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className={`form-control ${showDescriptionError ? 'is-invalid' : ''}`} value={note.description} minLength={5} required id="description" name="description" onChange={onChange} />
          {showDescriptionError && <div className="invalid-feedback">Description must be 5 characters or longer.</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" value={note.tag} minLength={2} required id="tag" name="tag" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-dark-pink" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}