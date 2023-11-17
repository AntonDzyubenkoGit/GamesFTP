import React from 'react';
import { categoryGames } from '../constants/constants';
import CategoryCard from './CategoryCard';

const CategoryGames = () => {
  return (
    <div className="max-container px-4 xl:px-[155px] text-primary font-regular">
      <h1
        className="text-center font-bold text-lg 
          md:text-xl pt-[30px] md:pt-[65px]"
      >
        Категории игр
      </h1>
      <ul
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 xl:gap-y-[50px] xl:gap-x-[100px]
          py-6 md:py-[50px]"
      >
        {categoryGames.map((category) => {
          return <CategoryCard key={category.id} {...category} />;
        })}
      </ul>
    </div>
  );
};

export default CategoryGames;
