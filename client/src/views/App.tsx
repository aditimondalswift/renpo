import { useState } from 'react'
import '../styles/App.css'
import About from './About'
import Login from './Login'
import Register from './Register'

function App() {
  const [page, setPage] = useState<'home' | 'about' | 'login' | 'register'>('home')

  return (
    <div className="app-container">
      <main>
        {page === 'home' && (
          <section className="hero-section">
            <span className="welcome-badge">Welcome</span>
            <h2>Welcome to CareLink!</h2>
            <p>
              CareLink connects families with trusted care centers and professional nurses for home and medical support.
            </p>
            <div className="divider"></div>
            <ul className="features-list">
              <li><span className="emoji">🏢</span> <strong>Care Center Dashboard</strong></li>
              <li><span className="emoji">👩‍⚕️</span> <strong>Nurse Profiles</strong></li>
              <li><span className="emoji">🏠</span> <strong>Family Portal</strong></li>
              <li><span className="emoji">📅</span> <strong>Booking & Scheduler</strong></li>
              <li><span className="emoji">💬</span> <strong>In-app Messaging</strong></li>
              <li><span className="emoji">✅</span> <strong>KYC & Reviews</strong></li>
              <li><span className="emoji">📍</span> <strong>Geo-Based Matching</strong></li>
            </ul>
          </section>
        )}
        {page === 'about' && <About />}
        {page === 'login' && <Login onFlip={() => setPage('register')} />}
        {page === 'register' && <Register onFlip={() => setPage('login')} />}
      </main>
      <div className="hero-auth-links">
        <a className="hero-auth-link" href="#" onClick={e => { e.preventDefault(); setPage('login'); }}>Member Login</a>
        <a className="hero-auth-link" href="#" onClick={e => { e.preventDefault(); setPage('login'); }}>Professional Login</a>
      </div>
      <div className="end-card-footer">
        Made with <span className="emoji">💚</span> for every generation
      </div>
    </div>
  )
}

export default App
