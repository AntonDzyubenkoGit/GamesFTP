import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import BtnPlay from './BtnPlay';
import BtnRemove from './BtnRemove';

const FavoriteGameCard = ({
  id,
  title,
  thumbnail,
  developer,
  release_date,
  genre,
  platform,
  dataGames,
  game_url,
  favDate,
}) => {
  const [date, setDate] = useState('');

  function formatDate(str) {
    setDate(`${str.split('.')[2]}-${str.split('.')[1]}-${str.split('.')[0]}`);
  }

  useEffect(() => {
    Aos.init();
    formatDate(favDate);
  }, [dataGames, favDate]);

  return (
    <li className="max-w-[380px] justify-self-center" data-aos="fade-up">
      <div
        className="
           bg-light border border-primary 
          rounded-t-lg rounded-bl-lg overflow-hidden shadow-card"
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
      </div>
      <div
        className="
          grid grid-cols-[2fr_1fr] gap-2 mt-4 
          justify-items-center text-sm md:text-base"
      >
        <p className="font-bold">Добавлено в избранное:</p>
        <p className="md:text-[16px]">{date}</p>
      </div>
      <div className="max-sm:flex-col flex justify-between items-center flex-wrap gap-4 mt-5">
        <BtnRemove id={id} />
        <BtnPlay game_url={game_url} />
      </div>
    </li>
  );
};

export default FavoriteGameCard;
