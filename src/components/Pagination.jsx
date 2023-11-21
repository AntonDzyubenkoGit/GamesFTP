import React from 'react';

const Pagination = ({ gamesPerPage, totalGames, switchPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex items-center justify-center flex-wrap gap-2">
      {pageNumbers.map((number) => {
        return (
          <li key={number}>
            <button
              className={`${
                number === currentPage ? 'bg-pink font-bold' : 'bg-play'
              } px-3 py-1 rounded-tl-xl rounded-br-xl shadow-button`}
              onClick={() => {
                switchPage(number);
              }}
            >
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
