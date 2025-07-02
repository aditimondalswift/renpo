import '../styles/Login.css';

const Login = ({ onRegister }: { onRegister: () => void }) => (
  <section className="login-section">
    <div className="login-card">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Email
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
    <div className="register-card">
      <h2>Register</h2>
      <form className="register-form" onSubmit={e => { e.preventDefault(); onRegister(); }}>
        <label>
          Name
          <input type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="Your email" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create a password" required />
        </label>
        <label>
          Confirm Password
          <input type="password" placeholder="Confirm password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  </section>
);

export default Login;
