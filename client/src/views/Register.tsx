import '../styles/Register.css';

const Register = () => (
  <section className="register-section">
    <h2>Register for BridgeBuds</h2>
    <form className="register-form">
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
  </section>
);

export default Register;