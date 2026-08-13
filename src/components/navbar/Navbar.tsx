import "./navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" data-cursor-size="180">
        <h1>Selene</h1>
      </Link>

      <div className="navbar-links">
        <Link to="/" data-cursor-size="60">HOME</Link>
        <Link to="/about" data-cursor-size="60">ABOUT</Link>
        <Link to="/events" data-cursor-size="60">EVENTS</Link>
        <Link to="/contacts" data-cursor-size="60">CONTACTS</Link>
      </div>
    </div>
  );
};

export default Navbar;
