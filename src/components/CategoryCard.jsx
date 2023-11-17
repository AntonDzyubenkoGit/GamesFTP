import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CategoryCard = ({ id, category, title, coverImage }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <li
      className="
        justify-self-center relative before:absolute
        before:w-[308px] before:h-[448px] md:before:h-[454px] 
        before:rounded-md before:border before:border-primary 
        before:bg-background-hf before:inset-0 before:shadow-card"
      data-aos="fade-up"
    >
      <Link
        className="
          block text-center 
        bg-light border border-primary 
          rounded-md relative inset-1"
        to={category}
      >
        <div className="overflow-hidden">
          <img
            className="
              max-w-[298px] h-[300px] hover:scale-105 
              transition-transform duration-300"
            src={coverImage}
            alt={title}
          />
        </div>
        <p className="pt-[40px] text-base md:text-[24px]">{title}</p>
        <p className="pt-[20px] pb-[46px] text-sm">#{category}</p>
      </Link>
    </li>
  );
};

export default CategoryCard;
