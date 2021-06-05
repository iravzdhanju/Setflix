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
          src=https://raw.githubusercontent.com/iravzdhanju/Image/main/JattFlix%20Logo.png'
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
