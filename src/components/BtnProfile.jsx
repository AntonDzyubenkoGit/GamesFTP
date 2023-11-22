import React from 'react';

const BtnProfile = ({ profile_url }) => {
  return (
    <a
      className="
      inline-flex justify-center items-center w-[170px] 
     bg-pink px-4 py-4 rounded-t-lg 
      rounded-bl-lg border border-primary font-bold 
      text-[16px] hover:bg-light duration-1000 shadow-button"
      href={profile_url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="relative">
        Профайл игры
        <span className="absolute top-3 left-[50%] translate-x-[-50%] text-[8px] font-regular">
          freetogame.com
        </span>
      </span>
    </a>
  );
};

export default BtnProfile;
