import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <div className='profieScreen'>
        <Nav />
        <div className='profileScreenBody'>
          <h1>Edit Profile</h1>
          <div className='profileScreen_info'>
            <img
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
              alt='Avatar'
            />
            <div className='profileScreen_details'>
              <h2>{user.email}</h2>
              <div className='profileScreen_plans'>
                <h3>Plans</h3>
                <PlanScreen />
                <button
                  onClick={() => auth.signOut()}
                  className='profileScreen_signOut'>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
