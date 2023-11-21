import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../hooks/Context';
import Loader from '../components/Loader';
import GameCard from '../components/GameCard';
import BtnBack from '../components/BtnBack';
import Decor from '../components/Decor';
import Pagination from '../components/Pagination';

const GamesListPage = () => {
  const navigate = useNavigate();
  const { API_KEY, API_URL, loading = true, setLoading } = useContext(AppContext);
  const [dataGames, setDataGames] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(30);
  const lastGameIndex = currentPage * gamesPerPage;
  const firstGameIndex = lastGameIndex - gamesPerPage;
  // const currentGamesData = [...dataGames].slice(firstGameIndex, lastGameIndex);
  const [currentGamesData, setCurrentGameData] = useState([]);

  function switchPage(page) {
    setCurrentPage(page);
  }

  function returnBack() {
    return navigate(-1);
  }

  useEffect(
    () => {
      async function getGamesList() {
        try {
          setLoading(true);

          await fetch(`${API_URL}/games`, {
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
              setLoading(false);
            });
        } catch (error) {
          console.log(error);
        }
      }
      getGamesList();
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
          Список игр
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <ul
              className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-6 xl:gap-y-[50px] xl:gap-x-[50px]
            py-6 md:py-[50px]"
            >
              {currentGamesData.map((game) => {
                return <GameCard key={game.id} {...game} dataGames={currentGamesData} />;
              })}
            </ul>
            {dataGames.length > gamesPerPage ? (
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

export default GamesListPage;
