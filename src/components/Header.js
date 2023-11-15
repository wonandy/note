import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
        className='save'
      >
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Header;
