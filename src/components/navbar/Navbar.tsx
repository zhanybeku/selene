import "./navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Selene</h1>
      </Link>

      <div className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/events">EVENTS</Link>
        <Link to="/contacts">CONTACTS</Link>
      </div>
    </div>
  );
};

export default Navbar;
