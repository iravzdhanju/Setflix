import React from "react";
import "./Banner.css";
function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="banner">
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://www.fg-a.com/wallpapers/2020-black-crystalline-peaks-image.jpg")`,
          backgroundPosition: "center center",
        }}>
        <div className="banner_contents">
          <h1 className="banner_title">Movie Name</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="banner_description">
            {truncate(
              "This is a test Description This is a test Description This is a test Description This is a test Description This is a test Description This is a test DescriptionThis is a test Description This is a test Description This is a test Description This is a test Description This is a test Description This is a test Description This is a test Description",
              150
            )}
          </div>
        </div>
        <div className="banner_fadebutton"></div>
      </header>
    </div>
  );
}

export default Banner;
