import React from 'react';
import logo from '../logo.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800  border-white border-2 text-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-xl font-semibold">Medi-Core</h1>
      </div>
      <div>
        <button className="button font-bold mr-2">
          Login
        </button>
        <button className="button">
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
