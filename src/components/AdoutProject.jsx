import React from 'react';
import { aboutItems } from '../constants/constants';
import Decor from './Decor';

const AdoutProject = () => {
  const classLi =
    'relative max-lg:justify-self-center text-sm lg:text-base text-center before:absolute before:w-[248px] before:h-[248px] before:rounded-full before:border before:border-primary before:bg-background-hf before:inset-0';
  const classSpan =
    'w-[240px] h-[240px] flex items-center justify-center bg-light rounded-full border border-primary relative  inset-1 px-[10px]';

  return (
    <div
      className="
        bg-hero bg-no-repeat bg-center bg-cover
      text-primary font-regular"
    >
      <h1
        className="
          text-center font-bold text-lg md:text-xl
          pt-[30px] md:pt-[65px]"
      >
        О проекте
      </h1>
      <ul
        className="
            max-container pt-[25px] px-4 
            max-lg:pb-[30px]  gap-x-2 gap-y-4 
            grid sm:grid-cols-2 lg:grid-cols-4 
            grid-rows-2 xl:gap-x-[74px] 
            lg:px-[30px] xl:px-[100px]
            "
      >
        {aboutItems.map((item, index) => {
          if (index === 1 || index === 2) {
            return (
              <li
                key={item.id}
                className={`${classLi} lg:row-span-2 lg:self-center tilt-in-bottom-1`}
              >
                <span className={classSpan}>{item.text}</span>
              </li>
            );
          } else {
            return (
              <li className={`${classLi} tilt-in-top-2`} key={item.id}>
                <span className={classSpan}>{item.text}</span>
              </li>
            );
          }
        })}
      </ul>
      <Decor />
    </div>
  );
};

export default AdoutProject;
