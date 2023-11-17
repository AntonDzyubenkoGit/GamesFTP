import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Context from './hooks/Context';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GamesListPage from './pages/GamesListPage';
import FavoriteGamesPage from './pages/FavoriteGamesPage';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games-list" element={<GamesListPage />} />
          <Route path="favorite" element={<FavoriteGamesPage />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Context>
  );
};

export default App;
