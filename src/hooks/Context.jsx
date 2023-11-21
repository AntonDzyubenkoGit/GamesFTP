import React, { createContext, useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';

export const AppContext = createContext();

const Context = (props) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    setCount(favoriteGames.length);
  }, [favoriteGames]);

  const addGame = (game) => {
    setFavoriteGames([game, ...favoriteGames]);
  };

  const removeGame = (id) => {
    setFavoriteGames(favoriteGames.filter((game) => game.id !== id));
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
