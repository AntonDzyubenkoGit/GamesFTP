import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutGame = (dataGame) => {
  const {
    title = '',
    genre = '',
    platform = '',
    release_date = '',
    developer = '',
    publisher = '',
    minimum_system_requirements: {
      os = '',
      processor = '',
      memory = '',
      graphics = '',
      storage = '',
    } = {},
    description = '',
    screenshots = [],
    thumbnail = '',
    game_url = '',
  } = dataGame;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-3 md:mt-[45px] lg:mt-[90px] text-sm md:text-base">
      <div className="grid lg:grid-cols-[auto_minmax(auto,620px)] gap-5">
        <div
          className="
          max-w-[365px] overflow-hidden border 
          border-primary max-lg:justify-self-center"
        >
          <img
            className="
            opacity-75  hover:scale-105 
            transition-transform duration-300"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 mt-3">
          <p className="font-bold">Название:</p>
          <p className="md:text-[16px]">{title}</p>
          <p className="font-bold">Жанр игры:</p>
          <p className="md:text-[16px]">{genre}</p>
          <p className="font-bold">Платформа:</p>
          <p className="md:text-[16px]">{platform}</p>
          <p className="font-bold">Дата релиза:</p>
          <p className="md:text-[16px]">{release_date}</p>
        </div>
      </div>

      <div
        className="
          grid lg:grid-cols-[minmax(auto,560px)_minmax(auto,620px)] 
          gap-5 lg:mt-[40px]"
      >
        <div className="shrink-0 flex flex-col gap-3">
          <div className="grid grid-cols-[auto_1fr] gap-2 lg:gap-5 max-lg:mt-2">
            <p className="font-bold">Разработчик:</p>
            <p className="text-sm  md:text-[16px]">{developer}</p>
            <p className="font-bold">Издатель:</p>
            <p className="text-sm  md:text-[16px]">{publisher}</p>
          </div>
          <div className="mt-4">
            <p className="font-bold">Минимальные системные требования:</p>
            <div className="grid grid-cols-[auto_1fr] gap-2 mt-2 text-sm  md:text-[16px]">
              <p className="text-system">OS</p>
              <p>{os === '?' ? 'N/A' : os}</p>
              <p className="text-system">Processor</p>
              <p>{processor === '?' ? 'N/A' : processor}</p>
              <p className="text-system">Memory</p>
              <p>{memory === '?' ? 'N/A' : memory}</p>
              <p className="text-system">Graphics</p>
              <p>{graphics === '?' ? 'N/A' : graphics}</p>
              <p className="text-system">Storage</p>
              <p>{storage === '?' ? 'N/A' : storage}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold">Описание игры:</p>
          <div className="grid gap-4 mt-4">
            {description.split('\r\n\r\n').map((item, index) => {
              return (
                <p key={index} className="text-sm  md:text-[16px]" data-aos="zoom-in-down">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <p className="font-bold text-center mt-[15px] md:mt-[50px]">Скриншоты:</p>
      <div
        className="
          grid md:grid-cols-[repeat(auto-fill,320px)] 
          gap-2 justify-center mt-[25px]"
      >
        {screenshots &&
          screenshots.map((item) => {
            return (
              <div
                className="
                  justify-self-center 
                  h-[180px] border  border-primary"
                key={item.id}
                data-aos="zoom-in"
              >
                <img className="max-w-[300px] h-[100%]" src={item.image} alt={title} />
              </div>
            );
          })}
      </div>
      <a href={game_url} target="_blank" rel="noreferrer">
        <button>Играть сейчас</button>
      </a>
    </div>
  );
};

export default AboutGame;
