export default function About(props) {
    document.title = 'NoteVault - About';
    let myStyle = {
        color: 'dark',
        backgroundColor: 'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className="my-3">NoteVault | Your Digital Notes</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Overview</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>NoteVault</strong> is a comprehensive <code>MERN (MongoDB, Express.js, React, Node.js)</code> stack application that empowers users with seamless note organization. Users can effortlessly add, edit, view, and store notes, with the added convenience of a robust login system to ensure the security of user data and provide private access.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>How To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <ul style={{ listStyleType: "decimal" }}>
                                <li><strong>Signup or Login:</strong></li><ul><li>Create an account by signing up or log in if you already have one.</li></ul>
                                <li><strong>Add Notes:</strong></li><ul><li>Click "Add Note" to create a new note.<li>Give it a title and content.</li><li>Click "Save" to store your note.</li>
                                </li></ul>
                                <li><strong>Edit or Delete:</strong></li><ul><li>To edit a note, click on it and make changes.</li><li>To edit a note, click on it and make changes.</li></ul>
                                <li><strong>View Your Notes:</strong></li><ul><li>Access and review your notes anytime.</li></ul>
                                <li><strong>Stay Secure:</strong></li><ul><li>Your data is private and secure with NoteVault.</li></ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Motivation</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The motivation behind <strong>NoteVault</strong> stemmed from the desire to simplify and enhance the note-taking experience. In today's digital age, efficient note management is crucial, and we recognized the need for a secure and responsive platform. With the abundance of information at our fingertips, finding a way to securely store and manage notes became a primary goal. NoteVault is our response to this challenge, offering users a robust, <code>privacy-focused</code>, and intuitive solution for their note organization needs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}