import React from 'react';
import { navMenus } from '../../utils/menuList';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-wrapper">
        <div className="logo"></div>
        <h2 className="font-semibold text-xl">
          <Link to="/">MARSHALL</Link>
        </h2>
      </div>
      <ul className="menus">
        {navMenus.map((menu, idx) => (
          <li key={idx}>
            <Link to={menu.to}>
              {menu.icon} {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="auth-wrapper"></div>
    </nav>
  );
};

export default Navbar;
