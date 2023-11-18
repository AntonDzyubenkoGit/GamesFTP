import React from 'react';

const BtnBack = ({ returnBack }) => {
  return (
    <button
      className="
        flex items-center justify-center bg-primary
        py-2 px-4 mt-3 md:mt-6 text-light font-bold 
        text-sm md:text-base tracking-normal rounded-xl "
      onClick={returnBack}
    >
      <span>Вернуться назад</span>
    </button>
  );
};

export default BtnBack;
