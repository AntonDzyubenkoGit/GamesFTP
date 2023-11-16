import React from 'react';
import { telegram } from '../assets';

const Footer = () => {
  return (
    <footer
      className="text-primary font-regular text-sm lg:text-base
        bg-background-hf border-t-[10px] border-background relative 
        before:content-[''] before:bg-primary before:w-full before:h-[10px] 
        before:absolute before:top-0"
    >
      <div className="max-container pb-[30px] pt-[40px] px-2 lg:px-[50px]">
        <div
          className="flex justify-between items-start gap-3 
            max-sm:flex-col max-sm:items-center"
        >
          <p>Источник данных: www.freetogame.com</p>
          <div>
            <p>Вы можете связаться с нами:</p>
            <a
              className="flex justify-center mt-1 md:mt-3"
              href="https://t.me/DVAnton"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-[32px] h-[32px]" src={telegram} alt="telegram icon" />
            </a>
          </div>
        </div>
        <a
          className="flex mt-[12px] items-center justify-center"
          href="https://dav-studio.ru/"
          target="_blank"
          rel="noreferrer"
        >
          dav-studio | 2022 - {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
