import '../styles/About.css';

const About = () => (
  <section className="about-section">
    <h2>About BridgeBuds</h2>
    <p>
      BridgeBuds is dedicated to connecting generations through meaningful companionships.
      Our mission is to foster intergenerational friendships and learning in a secure, community-driven environment.
    </p>
    <div className="about-highlights">
      <div className="about-card">
        <span className="emoji">🌟</span>
        <div>
          <strong>Safe & Moderated</strong>
          <div>Strict KYC, background checks, and real-time chat filters.</div>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">🤝</span>
        <div>
          <strong>Activity Matching</strong>
          <div>Connect by shared interests, games, and learning sessions.</div>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">🏆</span>
        <div>
          <strong>Bonding Badges</strong>
          <div>Earn fun milestones for participation and kindness.</div>
        </div>
      </div>
      <div className="about-card">
        <span className="emoji">🛡️</span>
        <div>
          <strong>Privacy First</strong>
          <div>Parental controls, safe video, and community flagging tools.</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;