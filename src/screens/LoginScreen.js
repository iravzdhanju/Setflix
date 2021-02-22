import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className='loginScreen_Background'>
        <img
          className='loginScreen_Logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='loginImage'
        />
        <button className='loginScreen_Button' onClick={() => setSignIn(true)}>
          SignIn
        </button>
        <div className='loginScreen_Gradient'></div>
        <div className='loginScreen_Body'>
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV Programmes and more.</h1>
              <h2>Watch anywhere, Cancel at any time</h2>
              <h3>
                Ready to Watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className='loginScreen_Input'>
                <form>
                  <input type='email' placeholder='Email Address' />
                  <button
                    className='loginScreen_getStarted'
                    onClick={() => setSignIn(true)}>
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
