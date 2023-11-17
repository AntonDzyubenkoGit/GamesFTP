import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../hooks/Context';
import { categoryGames } from '../constants/constants';
import Loader from '../components/Loader';
import GameCard from '../components/GameCard';

const CategoryPage = () => {
  const { category } = useParams();
  const { API_KEY, loading = true, setLoading } = useContext(AppContext);
  const [dataGames, setDataGames] = useState([]);
  const [pageTitle, setPageTitle] = useState('');

  const API_URL = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

  useEffect(function getGategoryGames() {
    for (let item of categoryGames) {
      if (item.category === category) {
        fetch(API_URL, {
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setDataGames(data);
            setPageTitle(item.title);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dataGames.length > 0 ? setLoading(false) : setLoading(true);
  }, [dataGames, setLoading]);

  return (
    <div className="max-container px-4 xl:px-[155px] text-primary font-regular">
      <h1
        className="text-center font-bold text-lg 
          md:text-xl pt-[30px] md:pt-[65px]"
      >
        {pageTitle}
      </h1>

      {loading ? (
        <Loader />
      ) : (
        <ul
          className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 xl:gap-y-[50px] xl:gap-x-[100px]
        py-6 md:py-[50px]"
        >
          {dataGames.map((game) => {
            return <GameCard key={game.id} {...game} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;