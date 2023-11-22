import React, { useContext } from 'react';
import { AppContext } from '../hooks/Context';

const BtnRemove = ({ id }) => {
  const { removeGame } = useContext(AppContext);

  return (
    <button
      className="
        inline-flex justify-center items-center w-[170px] 
      bg-pink px-2 py-4 rounded-t-lg
        rounded-bl-lg border border-primary font-bold 
        text-[16px] hover:bg-light duration-1000 shadow-button"
      onClick={() => removeGame(id)}
    >
      <span>Убрать из списка</span>
    </button>
  );
};

export default BtnRemove;
