import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../hooks/Context';

const Header = () => {
  const { count = 0 } = useContext(AppContext);

  return (
    <header className="bg-background text-primary text-sm font-regular sticky top-0 lg:text-base">
      <nav className="max-container mx-auto flex items-center justify-between py-4 px-4 md:justify-center md:gap-[250px]">
        <NavLink
          to="/games-list"
          className={({ isActive }) =>
            isActive ? 'font-bold underline order-2 md:order-1' : 'order-2 lg:order-1'
          }
        >
          Список игр
        </NavLink>
        <Link to="/" className="order-1 lg:order-2">
          <img
            src="/src/assets/logo.svg"
            alt="logo"
            className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px]"
          />
        </Link>
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            isActive ? 'font-bold underline flex items-center order-3' : 'flex items-center order-3'
          }
        >
          Избранное
          <div className="bg-primary ml-1 rounded-full w-[15px] h-[15px] flex items-center justify-center">
            <span className="text-[8px] text-light">{count}</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
