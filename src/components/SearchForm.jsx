import React, { useState } from 'react';

const SearchForm = ({ titleSearch, titleQuery }) => {
  const [search, setSearch] = useState(titleQuery);

  return (
    <form
      className="
        grow font-regular max-md:w-[100%]
        text-sm md:text-base
        flex items-center justify-center 
        border border-primary rounded-full"
      autoComplete="off"
      onSubmit={(e) => titleSearch(e)}
    >
      <input
        className="h-[40px] md:h-[50px] px-5 border-r border-primary rounded-l-full outline-0 bg-light grow shrink"
        type="search"
        name="titleSearch"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="по названию игры (en)"
      />
      <input
        className="h-[40px] md:h-[50px] px-3 grow shrink max-w-[120px] bg-primary font-bold text-light cursor-pointer rounded-r-full"
        type="submit"
        value="Искать"
      />
    </form>
  );
};

export default SearchForm;
