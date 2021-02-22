import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://deadline.com/wp-content/uploads/2020/07/netflix-logo.png")`,
          backgroundPosition: "center center",
        }}>
        <div className="banner_contents">
          <h1 className="banner_title">Movie Name</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="banner_description">This is a test Description</div>
        </div>
<div className="banner_fadebutton">
</div>
      </header>
    </div>
  );
}

export default Banner;
