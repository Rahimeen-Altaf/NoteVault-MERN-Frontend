import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

export default function Notes(props) {
  let navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      props.showAlert("You are not logged in. Please login to continue", "danger");
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleClick = (e) => {
    if (note.etitle.length < 5) {
      setShowTitleError(true);
    } else {
      setShowTitleError(false);
    }

    if (note.edescription.length < 5) {
      setShowDescriptionError(true);
    } else {
      setShowDescriptionError(false);
    }

    if (note.etitle.length >= 5 && note.edescription.length >= 5) {
      console.log("Updating a note", note);
      editNote(note.id, note.etitle, note.edescription, note.etag);
      refClose.current.click();
      props.showAlert("Note updated successfully", "success");
    }
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });

    // Hide the error message when the user starts typing again
    if (e.target.name === "etitle" && e.target.value.length >= 5) {
      setShowTitleError(false);
    }

    if (e.target.name === "edescription" && e.target.value.length >= 5) {
      setShowDescriptionError(false);
    }
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between" }}>
              <h5 className="modal-title" id="exampleModalLabel" style={{ fontFamily: "'Pacifico', cursive", order: "1", flexGrow: "1" }}>Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ order: "2" }}></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className={`form-control ${showTitleError ? 'is-invalid' : ''}`} minLength={5} required id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                  {showTitleError && <div className="invalid-feedback">Title must be 5 characters or longer.</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className={`form-control ${showDescriptionError ? 'is-invalid' : ''}`} minLength={5} required id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                  {showDescriptionError && <div className="invalid-feedback">Description must be 5 characters or longer.</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-dark-pink" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleClick} className="btn btn-dark-pink">Update</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {
          !notes.length ? <div className="container mx-2" style={{ fontFamily: "'Pacifico', cursive" }}> No Notes to display </div> :
            <>
              {
                notes.map((note) => (
                  <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />
                ))
              }
            </>
        }
      </div>
    </>
  );
}