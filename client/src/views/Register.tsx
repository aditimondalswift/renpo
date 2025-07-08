import { useState } from 'react';
import './../styles/Register.css';
import Login from './Login';
import Dashboard from './Dashboard';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showLogin, setShowlogin] = useState(false);
  const handleLoginClick = () => {
    setShowlogin(true);
  };
  if (showLogin) {
    return <Login />;
  }
    const handleSubmit = async () => {
    console.log('Form submission started');
    if (password !== confirmPassword) {
      console.log('Password mismatch');
      alert('Passwords do not match');
      return;
    }

    try {
      console.log('Sending user data to server');
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log('Server response:', data);
      console.log(response.status);
      if(response.status === 201) {
        console.log('User registered successfully');
        return <Dashboard />;
      }
      // Handle successful registration
    } catch (error) {
      console.error('Error occurred during registration:', error);
      // Handle registration error
    }
    console.log('Form submission ended');
  };

  return (
    <section className="login-section">
      <div className="auth-card improved-auth-card">
        <div className="auth-header">
          <h2>Register</h2>
        </div>
        <div className="auth-body">
          <form className="login-form improved-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="login-name">Name</label>
              <input id="login-name" type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} required />
            </div>
            <div className="form-group">
              <label htmlFor="login-name">Email</label>
              <input id="login-email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input id="login-password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </div>
            <div className="form-group">
              <label htmlFor="login-confirm-password">Confirm Password</label>
              <input id="login-confirm-password" type="password" placeholder="Enter your password again" onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button className="primary-btn" type="button" onClick={handleSubmit}>Register</button>
            <div className="switch-link">
              <span>Already have an account?</span>
              <button
                type="button"
                className="link-btn"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;