import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../hooks/Context';
import BtnBack from '../components/BtnBack';
import FavoriteGameCard from '../components/FavoriteGameCard';

const FavoriteGamesPage = () => {
  const navigate = useNavigate();
  const { favoriteGames } = useContext(AppContext);

  function returnBack() {
    return navigate(-1);
  }

  return (
    <div
      className="
        max-container px-4 xl:px-[120px] 
        mb-[30px] md:mb-[65px] text-primary font-regular"
    >
      <BtnBack returnBack={returnBack} />
      <h1
        className="text-center font-bold text-lg 
          md:text-xl pt-[30px] md:pt-[65px]"
      >
        Избранное
      </h1>
      {favoriteGames.length > 0 ? (
        <ul
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-6 xl:gap-y-[50px] xl:gap-x-[50px]
            py-6 md:py-[50px]"
        >
          {favoriteGames.map((game) => {
            return <FavoriteGameCard key={game.id} {...game} dataGames={favoriteGames} />;
          })}
        </ul>
      ) : (
        <h2 className="text-base text-center mt-8">Ещё ничего не добавлено</h2>
      )}
    </div>
  );
};

export default FavoriteGamesPage;
