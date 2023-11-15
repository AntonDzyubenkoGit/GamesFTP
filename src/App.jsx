import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Context from './hooks/Context';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GamesListPage from './pages/GamesListPage';
import FavoriteGamesPage from './pages/FavoriteGamesPage';

const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games-list" element={<GamesListPage />} />
          <Route path="favorite" element={<FavoriteGamesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Context>
  );
};

export default App;
