import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import BtnBack from '../components/BtnBack';
import { AppContext } from '../hooks/Context';
import AboutGame from '../components/AboutGame';
import Decor from '../components/Decor';

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { API_KEY, API_URL, loading = true, setLoading } = useContext(AppContext);
  const [dataGame, setDataGame] = useState({});

  function returnBack() {
    return navigate(-1);
  }

  useEffect(function getGategoryGames() {
    fetch(`${API_URL}/game?id=${id}`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => setDataGame(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dataGame.id ? setLoading(false) : setLoading(true);
  }, [dataGame, setLoading]);

  return (
    <>
      <div className="max-container px-4 xl:px-[120px] mb-[30px] md:mb-[65px] text-primary font-regular">
        <BtnBack returnBack={returnBack} />
        <h1
          className="text-center font-bold text-lg 
          md:text-xl pt-[30px] md:pt-[65px]"
        >
          {dataGame.title}
        </h1>
        {loading ? <Loader /> : <AboutGame {...dataGame} />}
      </div>
      <Decor />
    </>
  );
};

export default GamePage;
