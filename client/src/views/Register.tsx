import { useState } from 'react';
import './../styles/AuthFlipCard.css';

interface RegisterProps {
  onFlip: () => void;
}

const Register = ({ onFlip }: RegisterProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
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

      if (response.status === 201) {
        console.log('User registered successfully');
        onFlip();
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };

  return (
    <div>
      <div className="auth-container no-image">
        <div className="auth-form-panel">
          <h2>CareLink Registration</h2>
          <p>Create your account to manage care</p>
          <form className="register-form improved-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="register-name">Name</label>
              <input id="register-name" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="register-email">Email</label>
              <input id="register-email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="register-password">Password</label>
              <input id="register-password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="register-confirm-password">Confirm Password</label>
              <input id="register-confirm-password" type="password" placeholder="Enter your password again" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            </div>
            <button className="primary-btn" type="submit">Register</button>
            <div className="switch-link">
              <span>Already have an account?</span>
              
                <a href="#" onClick={e => { e.preventDefault(); onFlip(); }}>
                  Login
                </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;