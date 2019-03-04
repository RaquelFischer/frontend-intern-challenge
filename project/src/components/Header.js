import React from 'react';

const Header = ({ path }) => (
  <header className="header">
    <div>
      <img src={path} className="img-header" alt="logo linx" />
    </div>
  </header>
)

export default Header;
