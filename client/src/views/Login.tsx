import { useState } from 'react';
import './../styles/Login.css';
import Register from './Register';

const Login = ({ }: { onRegister?: () => void }) => {

  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  if (showRegister) {
    return <Register />;
  }

  return (
    <section className="login-section">
      <div className="auth-card improved-auth-card">
        <div className="auth-header">
          <h2>Login</h2>
        </div>
        <div className="auth-body">
          <form className="login-form improved-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input id="login-email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input id="login-password" type="password" placeholder="Enter your password" required />
            </div>
            <button className="primary-btn" type="submit">Login</button>
            <div className="switch-link">
              <span>Don't have an account?</span>
              <button
                type="button"
                className="link-btn"
                onClick={handleRegisterClick}
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