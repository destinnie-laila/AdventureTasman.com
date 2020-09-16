import React, { useState } from "react";
import { Link } from "react-router-dom";

// ===== All my imports for the corresponding page that the components will draw from at top of page ====== //

// Creating a Navbar Function that has a state
// Additional css is used to manipulate the style of the text and positions

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Tasman Adventures
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/adventures"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Adventures
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-links" onClick={closeMobileMenu}>
              Maps
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

// === export thr component so it can be imported elsewhere ===
export default Navbar;
