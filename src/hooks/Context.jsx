import React, { createContext, useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';

export const AppContext = createContext();

const Context = (props) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    if (!localStorage.favorite) {
      localStorage.setItem('favorite', '[]');
    } else {
      setFavoriteGames(JSON.parse(localStorage.getItem('favorite')));
    }
  }, []);

  useEffect(() => {
    setCount(favoriteGames.length);
  }, [favoriteGames]);

  const addGame = (game) => {
    if (!favoriteGames.some((item) => item.id === game.id)) {
      setFavoriteGames([game, ...favoriteGames]);
      localStorage.setItem(
        'favorite',
        JSON.stringify([game, ...JSON.parse(localStorage.getItem('favorite'))])
      );
    }
  };

  const removeGame = (id) => {
    setFavoriteGames(favoriteGames.filter((game) => game.id !== id));

    const storage = JSON.parse(localStorage.getItem('favorite')).filter((item) => item.id !== id);
    localStorage.setItem('favorite', JSON.stringify(storage));
  };

  const value = {
    count: count,
    favoriteGames,
    setFavoriteGames,
    addGame,
    removeGame,
    API_KEY,
    API_URL,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default Context;
