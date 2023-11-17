import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const GameCard = ({ id, title, thumbnail, developer, release_date, genre, platform }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up">
      <img src={thumbnail} alt={title} />
      <div>
        <p>Разработчик:</p>
        <p>{developer}</p>
      </div>
      <div>
        <p>Дата релиза:</p>
        <p>{release_date}</p>
      </div>
      <div>
        <p>Платформа:</p>
        <p>{platform}</p>
      </div>
      <span>{genre}</span>
      <Link to={`/${title}`}>
        <button>Подробнее об игре</button>
      </Link>
    </div>
  );
};

export default GameCard;
