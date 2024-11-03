import React from 'react';
import Logo from '../Logo';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <Logo />
      <nav>
        <a href="/">Home</a> | <a href="/products">Products</a>
      </nav>
    </header>
  );
}

export default Header;
