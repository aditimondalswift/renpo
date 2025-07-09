import { useState } from 'react';
import './../styles/AuthFlipCard.css';

interface LoginProps {
  onFlip: () => void;
}

const Login = ({ onFlip }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // Handle successful login (e.g., redirect or show dashboard)
      } else {
        const err = await res.json();
        alert(err.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Network error, please try again');
    }
  };

  return (
    <div>
      <div className="auth-container no-image">
        <div className="auth-form-panel">
          <h2>CareLink Portal Login</h2>
          <p>Access your healthcare management dashboard</p>
          <form className="login-form improved-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
            </div>
            <button className="primary-btn" type="submit">Login</button>
            <div className="switch-link">
              <span>Don't have an account?</span>
              <a href="#" onClick={e => { e.preventDefault(); onFlip(); }}>Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;