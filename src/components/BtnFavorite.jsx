import React, { useContext } from 'react';
import { AppContext } from '../hooks/Context';

const BtnFavorite = ({ dataGame }) => {
  const { favoriteGames, addGame } = useContext(AppContext);

  const {
    id = '',
    title = '',
    developer = '',
    genre = '',
    release_date = '',
    platform = '',
    thumbnail = '',
  } = dataGame;

  return (
    <button
      className="
        inline-flex justify-center items-center w-[170px] 
      bg-favorite px-2 py-4 rounded-t-lg
        rounded-bl-lg border border-primary font-bold 
        text-[16px] hover:bg-light duration-1000"
      onClick={() =>
        addGame({
          id,
          title,
          developer,
          genre,
          release_date,
          platform,
          thumbnail,
          isFav: true,
          favDate: new Date(),
        })
      }
    >
      <span>Добавить в избранное</span>
    </button>
  );
};

export default BtnFavorite;
