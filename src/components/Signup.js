import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const host = "https://note-vault-app-278b6566bdac.herokuapp.com";

export default function Signup(props) {
  document.title = 'NoteVault - Signup';

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert('Passwords do not match', 'danger');
      return;
    }

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert('Account Created Successfully.', 'success');
    } else {
      props.showAlert(json.error, 'danger');
    }
  };

  // Add a link to the signup page
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', marginTop: "0", marginBottom: "0" }}>
      <div className='text-white p-4 rounded' style={{ background: 'rgba(0, 0, 0, 0.6)', marginTop: "0", marginBottom: "0" }}>
        <h2 className='my-3'>Create an account to use <code>NoteVault</code></h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" id="name" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="email" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password" onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name="cpassword" id="cpassword" onChange={onChange} minLength={5} required />
          </div>
          <button type="submit" className="btn btn-dark-pink">Submit</button>
        </form>
        <p className="mt-3">Already have an account? <span onClick={goToLogin} style={{ color: 'pink', cursor: 'pointer' }}>Click here to Login!</span></p>
      </div>
    </div>
  );
}
