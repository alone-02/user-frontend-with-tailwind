import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import React, { useContext, useState } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

import "./login.css";
//import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const navigator = useNavigate();

  const {signIn, setSignIn} = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function dataInput(event) {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Validation function
  function validate() {
    let emailError = "";
    let passwordError = "";

    const emailRegex = /\S+@\S+\.\S+/;

    if (!loginData.email || !emailRegex.test(loginData.email)) {
      emailError = "Please enter a valid email address.";
    }

    if (!loginData.password || loginData.password.length < 6) {
      passwordError = "Password must be at least 6 characters long.";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return false;
    }
    setErrors({ email: "", password: "" });
    return true;
  }

  const setSignInContext = (bool) => {
    console.log(bool);
    setSignIn(bool);
  };

  const login = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }
    //console.log("Login");
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", loginData);

      if (response.status === 200) {
        // console.log("User Found");
        alert(response.data.message);

        const { token, userId } = response.data;

        //console.log(userId);

        document.cookie = `userId=${userId}; path=/; secure; SameSite=Strict`;
        document.cookie = `authToken=${token}; path=/; secure; SameSite=Strict`;

        const userIdCookie = Cookies.get("userId");
        const authTokenCookie = Cookies.get("authToken");

        //console.log(userId);

        if (!userIdCookie || !authTokenCookie) {
          console.error("User is not authenticated. Missing token or userId.");
          alert("Something went wrong. Please try again.");
        }

        setSignInContext(true);

        navigator("/explore");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
      console.error("Error ", err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form method="post" action="./login" onSubmit={login}>
        <div className="loginform">
          <h2>Log In</h2>

          <input
            className="login_input"
            placeholder="Enter Email"
            required
            name="email"
            onChange={dataInput}
            value={loginData.email}
          />
          {errors.email && (
            <p className="error" style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </p>
          )}

          <input
            className="login_input"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={dataInput}
            value={loginData.password}
          />
          {errors.password && (
            <p className="error" style={{ color: "red", fontSize: "12px" }}>
              {errors.password}
            </p>
          )}

          <Link to="/signup" className="linksingup">
            Don't have an account? Sign up
          </Link>

          <button className="loginformbtn" type="submit" disabled={loading}>
            {loading ? "Logging In" : "Log In"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
