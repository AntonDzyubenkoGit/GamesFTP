import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../hooks/Context';
import { logo, telegram } from '../assets';

const Header = () => {
  const { count = 0 } = useContext(AppContext);

  return (
    <header
      className="
        bg-background-hf text-primary text-sm 
        font-regular sticky top-0 lg:text-base"
    >
      <a
        className="absolute max-lg:hidden lg:top-1 lg:left-1 "
        href="https://t.me/DVAnton"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-[32px] h-[32px]" src={telegram} alt="telegram icon" />
        <span className="text-xs absolute w-max">Для связи</span>
      </a>
      <nav
        className="
          max-container mx-auto flex items-center justify-between 
          py-4 px-2 md:justify-center md:gap-[250px]"
      >
        <NavLink
          to="/games-list"
          className={({ isActive }) =>
            isActive ? 'font-bold underline order-2 md:order-1' : 'order-2 lg:order-1'
          }
        >
          Список игр
        </NavLink>
        <Link to="/" className="order-1 lg:order-2">
          <img src={logo} alt="logo" className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px]" />
        </Link>
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            isActive ? 'font-bold underline flex items-center order-3' : 'flex items-center order-3'
          }
        >
          Избранное
          <div
            className="
              bg-primary ml-1 rounded-full w-[15px] h-[15px] 
              flex items-center justify-center"
          >
            <span className="text-[8px] text-light">{count}</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
