import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import "./heading.css";
import { AuthContext } from "../ContextApi/AuthContext";

function AccountDropdown() {
  const [isToggled, setToggle] = useState(false);
  const { signIn, setSignIn } = useContext(AuthContext);

  const toggle = () => {
    setToggle(!isToggled);
    console.log("HII");
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("userId");
    setSignIn(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (event.target.closest(".toggleoption_div")) {
        return;
      }
      setToggle(false);
    });
  }, []);

  return (
    <>
      <div className="accountIcon">
        <AccountCircleOutlinedIcon
          style={{
            fontSize: "40px",
          }}
          onClick={toggle}
        />
      </div>
      {isToggled && (
        <div className="toggleoption_div">
          <Link to="/account" className="toggleoption">
            Profile
          </Link>
          <Link to="/orders" className="toggleoption">
            Orders
          </Link>
          <Link to="/login" className="toggleoption" onClick={handleLogout}>
            Log Out
          </Link>
        </div>
      )}
    </>
  );
}

export default AccountDropdown;
