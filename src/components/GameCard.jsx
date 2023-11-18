import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const GameCard = ({
  id,
  title,
  thumbnail,
  developer,
  release_date,
  genre,
  platform,
  dataGames,
}) => {
  useEffect(() => {
    Aos.init();
  }, [dataGames]);

  return (
    <li
      className="
        justify-self-center bg-light border border-primary 
        rounded-t-lg rounded-bl-lg overflow-hidden max-w-[360px]
        shadow-card"
      data-aos="fade-up"
    >
      <img className="w-full opacity-75" src={thumbnail} alt={title} />
      <h3
        className="text-center pt-3 text-base md:text-[24px] font-bold block"
        data-aos="zoom-in-left"
      >
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2 px-7 text-sm md:text-base mt-3">
        <p className="font-bold">Разработчик:</p>
        <p className="text-sm  md:text-[16px] line-clamp-1">{developer}</p>
        <p className="font-bold">Дата релиза:</p>
        <p className="text-sm  md:text-[16px]">{release_date}</p>
        <p className="font-bold">Платформа:</p>
        <p className="text-sm  md:text-[16px]">{platform}</p>
      </div>
      <div className="flex items-center justify-between px-7 pt-6 pb-2 md:pt-[35px]">
        <span className="text-xs md:text-sm font-bold">#{genre}</span>
        <Link
          className="
            flex items-center justify-center border 
          border-primary rounded-t-lg rounded-bl-lg
            py-2 px-2 font-bold text-sm md:text-base
          hover:bg-pink duration-1000"
          to={`/game/${id}`}
        >
          <button data-aos="zoom-in">Подробнее об игре</button>
        </Link>
      </div>
    </li>
  );
};

export default GameCard;
