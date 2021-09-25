import React from 'react';
import logo from '../images/logo.png'
import './Header.css'
const Header = () => {
    return (
      <div>
            <div className="header">
            <img src={logo} alt="" />
        </div>

      <div className="deatils">
      <a href="/shop"> Shop</a>
        <a href="/reviwe"> Reviwe</a>
        <a href="/manage"> Shop management</a>
      </div>
      </div>
    );
};

export default Header;