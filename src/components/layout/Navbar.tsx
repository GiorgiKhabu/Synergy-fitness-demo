import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.jpg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Membership", path: "/membership" },
  { label: "Classes", path: "/classes" },
  { label: "Trainers", path: "/trainers" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="navbar-inner container-slim">
        <Link className="brand" to="/">
          <img src={logo} alt="Synergy Logo" />
          <span>Synergy</span>
        </Link>

        <nav
          className={`nav-links ${open ? "nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {/* <Button className="nav-cta" to="/membership">
            Join Now
          </Button> */}
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
