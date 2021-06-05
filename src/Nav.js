import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transtitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transtitionNavBar);
    return () => window.removeEventListener("scroll", transtitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='nav_Contents'>
        <img
          onClick={() => history.push("/")}
          className='nav_logo'
          src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
          alt=''
        />

        <img
          onClick={() => history.push("/profile")}
          className='nav_avatar'
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
