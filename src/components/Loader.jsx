import React from 'react';

const Loader = () => {
  return (
    <button
      type="button"
      className="
        flex items-center justify-center 
        mx-auto mt-10 px-4 py-2 font-semibold 
        leading-6 text-base shadow rounded-md 
        text-light bg-primary hover:opacity-80 
        transition ease-in-out duration-150 
        font-regular tracking-wider cursor-not-allowed"
      disabled=""
    >
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-light"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Идёт загрузка...
    </button>
  );
};

export default Loader;
