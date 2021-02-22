import React from 'react';
import './Nav.css';
function Nav() {
  return (
    <div className='nav'>
      <div className='nav_Contents'>
        <img
          className='nav_logo'
          src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
          alt=''
        />

        <img
          className='nav_avatar'
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
