import React, { createContext, useEffect, useState } from 'react';
import { API_KEY } from '../config';

export const AppContext = createContext();

const Context = (props) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favoriteGames, setFavoriteGames] = useState([
    // { id: 1, title: 'First ' },
    // { id: 2, title: 'Second ' },
    // { id: 3, title: 'Third ' },
  ]);

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
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default Context;
