import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-slim footer-grid">
        <div className="footer-brand">
          <div>
            <img src={logo} alt="Synergy Logo" />
            <h3>Synergy</h3>
          </div>
          <p>Premium performance, recovery, and community training.</p>
        </div>

        {/* <div className="footer-links">
          <h4>Club</h4>
          <Link to="/about">About</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/trainers">Trainers</Link>
        </div> */}

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>6 marijani street</p>
          <p>Tbilisi</p>
          <p>hello@synergygym.com</p>
          <p>511 26 62 11</p>
        </div>

        <div className="footer-hours">
          <h4>Hours</h4>
          <p>Mon–Fri: 7:00 - 24:00</p>
          <p>Sat-Sun: 9:00 – 24:00</p>
        </div>
      </div>
      <div className="footer-bottom container-slim">
        <p>
          © 2026 Synergy Gym. Designed for strength, recovery, and movement.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
