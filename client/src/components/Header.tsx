import '../styles/Header.css'

type HeaderProps = {
  onNav: (page: 'home' | 'about' | 'login') => void
  active: 'home' | 'about' | 'login'
}

const Header = ({ onNav, active }: HeaderProps) => (
  <header className="carelink-header">
    <h1>🏥 CareLink</h1>
    <p className="tagline">Nursing Support, Seamlessly Connected</p>
    <nav>
      <button
        className={active === 'home' ? 'active' : ''}
        onClick={() => onNav('home')}
      >
        Home
      </button>
      <button
        className={active === 'about' ? 'active' : ''}
        onClick={() => onNav('about')}
      >
        About
      </button>
      <button
        className={active === 'login' ? 'active' : ''}
        onClick={() => onNav('login')}
      >
        Login
      </button>
    </nav>
  </header>
)

export default Header