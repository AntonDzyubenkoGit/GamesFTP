import React from 'react';

const BtnPlay = ({ game_url }) => {
  return (
    <a
      className="
          inline-flex justify-center items-center w-[170px] 
          bg-play px-4 py-4 rounded-t-lg 
          rounded-bl-lg border border-primary font-bold 
          text-[16px] hover:bg-light duration-1000 shadow-button"
      href={game_url}
      target="_blank"
      rel="noreferrer"
    >
      <span>Играть сейчас</span>
    </a>
  );
};

export default BtnPlay;
