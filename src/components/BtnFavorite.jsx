import React, { useContext, useEffect } from 'react';
import { AppContext } from '../hooks/Context';

const BtnFavorite = ({ dataGame }) => {
  const { addGame } = useContext(AppContext);

  const {
    id = '',
    title = '',
    developer = '',
    genre = '',
    release_date = '',
    platform = '',
    thumbnail = '',
    game_url,
  } = dataGame;

  return (
    <button
      className="
        inline-flex justify-center items-center w-[170px] 
      bg-favorite px-2 py-4 rounded-t-lg
        rounded-bl-lg border border-primary font-bold 
        text-[16px] hover:bg-light duration-1000 shadow-button"
      onClick={() =>
        addGame({
          id,
          title,
          developer,
          genre,
          release_date,
          platform,
          thumbnail,
          game_url,
          isFav: true,
          favDate: new Date().toLocaleDateString(),
        })
      }
    >
      <span>Добавить в избранное</span>
    </button>
  );
};

export default BtnFavorite;
