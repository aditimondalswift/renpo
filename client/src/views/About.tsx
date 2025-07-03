import '../styles/About.css';

const About = () => (
  <section className="about-section">
    <h2>About CareLink</h2>
    <p>
      <strong>CareLink</strong> is a platform that connects families with trusted care centers and professional nurses for home and medical support. Our mission is to make quality care accessible, transparent, and seamless for every generation.
    </p>
    <div className="about-highlights">
      <div className="about-card">
        <span className="emoji">🏢</span>
        <div>
          <strong>Care Center Dashboard</strong>
          <p>Register your center, manage staff, set availability, and approve user requests.</p>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">👩‍⚕️</span>
        <div>
          <strong>Nurse Profiles</strong>
          <p>Showcase experience, certifications, skills, languages, and manage shift calendars.</p>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">🏠</span>
        <div>
          <strong>Family Portal</strong>
          <p>Register, describe care needs, browse centers, or request a personalized match.</p>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">📅</span>
        <div>
          <strong>Booking & Scheduler</strong>
          <p>Book single or recurring sessions, set preferences, and view nurse bios before confirming.</p>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">💬</span>
        <div>
          <strong>In-app Messaging</strong>
          <p>Chat with care center staff, confirm details, and receive real-time updates.</p>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">✅</span>
        <div>
          <strong>KYC & Reviews</strong>
          <p>ID verification for all parties and post-session ratings for accountability.</p>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">📍</span>
        <div>
          <strong>Geo-Based Matching</strong>
          <p>Find nearby centers or nurses for home or center visits, with flexible options.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;