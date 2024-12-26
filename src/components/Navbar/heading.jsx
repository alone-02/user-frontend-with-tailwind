import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Dropdown from "./AccountDropdown";
import Search from "./Search";
import "./heading.css";
import { AuthContext } from "../ContextApi/AuthContext";

function Heading({ toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  console.log(isLogin);
  const { signIn, setSignIn } = useContext(AuthContext);
  console.log(signIn);

  const home = () => navigate("/");
  const login = () => navigate("/login");
  const signup = () => navigate("/signup");
  const cart = () => navigate("/cart");

  return (
    <nav className="navbar">
      {!isHome && (
        <div>
          <MenuIcon
            onClick={toggleSidebar}
            style={{
              display: "inline",
              margin: "0px 10px",
              fontSize: "30px",
              color: "white",
            }}
          />
        </div>
      )}

      <div className="navbar-logo" onClick={home}>
        <img src="Logo.webp" alt="Home Logo" className="h-10 w-auto" />
        <p>Shree Ganesh Museum</p>
      </div>

      {!isHome && (
        <>
          {/*<div className="navbar-search">
            <Search />
          </div>*/}
          <div className="navbar-cart">
            <ShoppingCartIcon onClick={cart} />
          </div>
        </>
      )}
      <div className="navbar-buttons">
        {!signIn && (
          <>
            <button className="navbar-btn" onClick={!isLogin ? login : signup}>
              {!isLogin ? "Login" : "Sign Up"}
              {!isLogin ? <LoginIcon /> : <LogoutIcon />}
            </button>
          </>
        )}
      </div>

      <div className="navbar-account">{signIn && <Dropdown />}</div>
    </nav>
  );
}

export default Heading;
