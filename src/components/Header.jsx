import React from 'react';
import logo from '../assets/logo.jpg';

const Header = () => (
  <header className="cabecalho">
    <img src={logo} alt="Logo L&L" className="logo" />
    <h1>L&L - SOLUÇÕES CAMBIAIS</h1>
  </header>
);

export default Header;
