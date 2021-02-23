import React from 'react';

import Logo from "../unit/logo"
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
    </header>
  )
}

export default Header;