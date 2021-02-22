import React from "react";
import "./LoginScreen.css";
function LoginScreen() {
  return (
    <div className='loginScreen'>
      <div className='loginScreen_Background'>
        <img
          className='loginScreen_Logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='loginImage'
        />
        <button className='loginScreen_Button'>SignIn</button>
        <div className='loginScreen_Gradient' />
      </div>
    </div>
  );
}

export default LoginScreen;
