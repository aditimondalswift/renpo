import { useState } from 'react'
import '../styles/App.css'
import About from './About'
import Login from './Login'
import Register from './Register' // <-- Add this

function App() {
  const [page, setPage] = useState<'home' | 'about' | 'login' | 'register'>('home')

  return (
    <div className="app-container">
      <header>
        <h1>🤝 BridgeBuds</h1>
        <p className="tagline">Connecting Generations, Creating Memories</p>
        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('about')}>About</button>
          <button onClick={() => setPage('login')}>Login</button>
        </nav>
      </header>
      <main>
        {page === 'home' && (
          <section className="hero-section">
            <span className="welcome-badge">Welcome</span>
            <h2>Welcome to BridgeBuds!</h2>
            <p>
              BridgeBuds is a safe, fun platform where seniors and children connect through shared activities, stories, and learning.
            </p>
            <div className="divider"></div>
            <ul className="features-list">
              <li><span className="emoji">👵</span> Senior & <span className="emoji">👧</span> Child Profiles</li>
              <li><span className="emoji">💬</span> Activity Matching</li>
              <li><span className="emoji">📅</span> Companion Calendar</li>
              <li><span className="emoji">🎥</span> Safe Video Chat</li>
              <li><span className="emoji">🏆</span> Bonding Badges</li>
              <li><span className="emoji">🛡️</span> Safety & Moderation</li>
            </ul>
          </section>
        )}
        {page === 'about' && (
          <About />
        )}
        {page === 'login' && (
          <Login onRegister={() => setPage('register')} />
        )}
        {page === 'register' && (
          <Register />
        )}
      </main>
      <div className="end-card-footer">
        Made with <span className="emoji">💚</span> for every generation
      </div>
    </div>
  )
}

export default App
