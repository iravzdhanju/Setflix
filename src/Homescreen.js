import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
function Homescreen() {
  return (
    <div className="homescreen">
      {/* NAV */}
      <Nav />
      {/* Banner */}
      <Banner />
    </div>
  );
}

export default Homescreen;
