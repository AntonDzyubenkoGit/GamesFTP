import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../hooks/Context';
import { categoryGames } from '../constants/constants';
import Loader from '../components/Loader';
import GameCard from '../components/GameCard';
import BtnBack from '../components/BtnBack';
import Decor from '../components/Decor';
import Pagination from '../components/Pagination';
import SearchForm from '../components/SearchForm';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const {
    API_KEY,
    API_URL,
    loading = true,
    setLoading,
    searchParams,
    titleSearch,
  } = useContext(AppContext);
  const [dataGames, setDataGames] = useState([]);
  const [pageTitle, setPageTitle] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(18);
  const lastGameIndex = currentPage * gamesPerPage;
  const firstGameIndex = lastGameIndex - gamesPerPage;
  const [currentGamesData, setCurrentGameData] = useState([]);

  const titleQuery = searchParams.get('title') || '';

  function switchPage(page) {
    setCurrentPage(page);
  }

  function returnBack() {
    return navigate(-1);
  }

  useEffect(
    () => {
      async function getGategoryGames() {
        for (let item of categoryGames) {
          if (item.category === category) {
            setLoading(true);

            await fetch(`${API_URL}/games?category=${category}`, {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
              },
            })
              .then((response) => response.json())
              .then((data) => {
                setDataGames(data);
                setCurrentGameData(data.slice(firstGameIndex, lastGameIndex));
                setPageTitle(item.title);
                setLoading(false);
              });
          }
        }
      }
      getGategoryGames();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage]
  );

  return (
    <>
      <div className="max-container px-4 xl:px-[120px] mb-[30px] md:mb-[65px] text-primary font-regular">
        <BtnBack returnBack={returnBack} />
        <h1
          className="text-center font-bold text-lg 
          md:text-xl pt-[30px] md:pt-[65px]"
        >
          {pageTitle}
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div
              className="
                flex items-center gap-x-10 gap-y-2 
                max-md:flex max-md:flex-col mt-5"
            >
              <h3 className="font-bold text-base md:text-[24px]">Поиск: </h3>
              <SearchForm titleSearch={titleSearch} titleQuery={titleQuery} />
            </div>
            <ul
              className="
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-6 xl:gap-y-[50px] xl:gap-x-[50px]
                py-6 md:py-[50px]"
            >
              {!titleQuery
                ? currentGamesData.map((game) => {
                    return <GameCard key={game.id} {...game} dataGames={currentGamesData} />;
                  })
                : dataGames
                    .filter((game) => game.title.toLowerCase().includes(titleQuery.toLowerCase()))
                    .map((game) => {
                      return <GameCard key={game.id} {...game} dataGames={dataGames} />;
                    })}
            </ul>
            {!titleQuery && dataGames.length > gamesPerPage ? (
              <Pagination
                gamesPerPage={gamesPerPage}
                totalGames={dataGames.length}
                switchPage={switchPage}
                currentPage={currentPage}
              />
            ) : null}
          </>
        )}
      </div>
      <Decor />
    </>
  );
};

export default CategoryPage;
