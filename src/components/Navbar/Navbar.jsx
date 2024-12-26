import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import { AuthContext } from "../ContextApi/AuthContext";

const Navbar = () => {
  const {signIn} = useContext(AuthContext);
  console.log(signIn);

  return (
    <nav className="navbar1">
      <div className="navbar-container1">
        <div className="navbar-links1">
          <Link to="/" className="navbar-logo1">
            <img src="Logo.webp" alt="Home Logo1" />
          </Link>
          <Link to="/" className="navbar-link1">
            <h1>Shree Ganesh Museum</h1>
          </Link>
        </div>

        <div>
        {!signIn &&
          <Link to="/login" className="navbar-login-btn1">
            Log In
          </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
