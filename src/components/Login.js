import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  document.title = 'NoteVault - Login';

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert('Logged in Successfully', 'success');
      navigate('/');
    } else {
      props.showAlert(json.error, 'danger');
    }
  }

  // Add a link to the signup page
  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className='mt-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div className='text-white p-4 rounded' style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
        <h2 className='my-3'>Login to continue to <code>NoteVault</code></h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={onChange} value={credentials.email} name="email" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={onChange} value={credentials.password} name="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p className="mt-3">Don't have an account? <span onClick={goToSignup} style={{ color: 'blue', cursor: 'pointer' }}>Click here to make one!</span></p>
      </div>
    </div>
  );
}