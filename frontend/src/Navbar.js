import React from "react";
import "./App.css";

function Navigation() {

  return (
    <>
      <div className="navbarcss">
        <h1 className="brand">
          STUDY<em>PLANNER</em>
        </h1>
        <div className="mid">
          <a href="home.html">Home</a>
          <a href="Orders">Orders</a>
          <a href="help">Help</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;