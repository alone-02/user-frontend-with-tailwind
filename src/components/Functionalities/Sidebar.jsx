import React from "react";
import {Link} from "react-router-dom";
import "./sideBar.css";

function Sidebar({isSidebarOpen}) {
  
  return (<>
    {isSidebarOpen && (<div className="sideBar">
      <div className="sideoption_div">
        <Link to="/account" className="sidebar_option">Categories</Link>
        <Link to="/sign out" className="sidebar_option">Price</Link>
        <Link to="/sign out" className="sidebar_option">Reviews</Link>
      </div>
    </div>)
    }
    </>
  ); 
}

export default Sidebar;
