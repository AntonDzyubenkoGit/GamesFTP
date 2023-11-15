import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const Context = (props) => {
  const [count, setCount] = useState(0);

  const [games, setGames] = useState([
    // { id: 1, title: 'First ' },
    // { id: 2, title: 'Second ' },
    // { id: 3, title: 'Third ' },
  ]);

  const addGame = (game) => {
    setGames([game, ...games]);
    setCount(games.length);
  };

  const removeGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
    setCount(games.length);
  };

  const value = { count: count, games, addGame, removeGame };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default Context;
