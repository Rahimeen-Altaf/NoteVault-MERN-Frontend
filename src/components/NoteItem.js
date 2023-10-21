import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

export default function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">
                            {note.title}
                        </h5>
                        <i className="fa-solid fa-trash mx-2" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Note deleted successfully", "success");
                        }}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={() => updateNote(note)}></i>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: '0',
                            color: 'pink',
                            background: 'pink'
                        }}>
                            <span className="badge bg-light-pink">
                                {note.tag ? note.tag : 'default'}
                            </span>
                        </div>
                    </div>
                    <p className="card-text">
                        {note.description}
                    </p>
                </div>
            </div>
        </div>
    );
}