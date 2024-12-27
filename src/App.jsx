import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { IdolProvider } from "./components/ContextApi/IdolContext.jsx";
import { AuthContext, AuthProvider } from "./components/ContextApi/AuthContext.jsx";

import Heading from "./components/Navbar/heading.jsx";
import Content from "./components/Container/content.jsx";
import Sidebar from "./components/Functionalities/Sidebar.jsx";

import Login from "./components/Signin/Login.jsx";
import Signup from "./components/Signin/Signup.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Idoldetails from "./components/Productfeature/Idoldetails.jsx";

import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
//import "./styles.css";

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname == "/login";
  const isSignup = location.pathname == "/signup";
  const isHome = location.pathname == "/";
  const auth = isLogin || isSignup;

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          {!auth && <Sidebar isSidebarOpen={isSidebarOpen} className="w-1/4"/>}
          <div className="flex-1 p-4">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/explore" element={<Content />} />
              <Route path="/idoldetails" element={<Idoldetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <IdolProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </IdolProvider>
    </BrowserRouter>
  );
}

export default App;

//{!signIn && <Sidebar />}
