import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../Pages/Register.css';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: `${firstname} ${lastname}`,
      });
      navigate('/dashboard');
    } catch (err) {
      setError("Invalid user credentials, try again!");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input-field"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field"
            />
            
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">You have an account?</p>
        <button
          onClick={() => navigate('/')}
          className="login-button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
