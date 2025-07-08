import { useState } from 'react';
import './../styles/Login.css';

interface LoginProps {
  onRegister: () => void;
  onSuccess: () => void;
}


const Login : React.FC<LoginProps> = ({ onRegister, onSuccess}) => {
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
        onSuccess();
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
    <section className="login-section">
      <div className="auth-card improved-auth-card">
        <div className="auth-header">
          <h2>Login</h2>
        </div>
        <div className="auth-body">
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
              <button
                type="button"
                className="link-btn"
                onClick={onRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;