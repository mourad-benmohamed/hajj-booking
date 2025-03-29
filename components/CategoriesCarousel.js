'use client'
import useEmblaCarousel from 'embla-carousel-react';
import React, { useRef, useState } from 'react';
import {
  FiUmbrella,
  FiGift,
  FiStar,
  FiDollarSign,
  FiMoon,
  FiSun,
  FiCalendar,
  FiHeart,
  FiZap,
  FiAward,
  FiBook,
  FiStar as FiStarOutline,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { IoCarSportOutline } from "react-icons/io5";
import { PiMosque } from "react-icons/pi";
import { LiaKaabaSolid } from "react-icons/lia";
import { LiaDogSolid } from "react-icons/lia";
import { PiBowlFoodLight } from "react-icons/pi";
import { LiaBusSolid } from "react-icons/lia";
import { LiaQuranSolid } from "react-icons/lia";
import { GoZap } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { LiaHelicopterSolid } from "react-icons/lia";
import { LiaAwardSolid } from "react-icons/lia";




const CategoriesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false,dragFree: true });
  const [activeCategory, setActiveCategory] = useState(0); // Track active category

  const categories = [
    { name: 'Hajj', icon: <LiaKaabaSolid className='mx-auto'/> },
    { name: 'Umrah', icon: <PiMosque className='mx-auto'/> },
    { name: 'Luxury', icon: <LiaHelicopterSolid className='mx-auto'/> },
    { name: 'Standard', icon: <IoCarSportOutline className='mx-auto'/> },
    { name: 'Low Budget', icon: <LiaBusSolid className='mx-auto'/> },
    { name: 'Ramadan Offer', icon: <FiSun className='mx-auto'/> },
    { name: 'Eid ul-Fitr', icon: <PiBowlFoodLight className='mx-auto'/> },
    { name: 'Eid Al-Adha', icon: <LiaDogSolid className='mx-auto'/> },
    { name: 'Ashura Offer', icon: <GoZap className='mx-auto'/> },
    { name: 'The New Year', icon: <LiaAwardSolid className='mx-auto'/> },
    { name: 'Laylat al-Qadr', icon: <LiaQuranSolid className='mx-auto'/> },
    { name: 'Layla', icon: <IoIosStarOutline className='mx-auto'/> },
  ];
  return (
    <div
      className="2xl:max-w-7xl 2xl:mx-auto relative -top-30 mt-12 pl-6 lg:pl-8 embla overflow-hidden"
      ref={emblaRef}
    >
      <div className="select-none space-x-2 embla__container">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`
              cursor-pointer text-base px-2 py-2 rounded-full transition-all duration-300
              hover:text-[#00C951] dark:hover:text-[#00C951]
              ${
                activeCategory == index
                  ? "text-green-500 dark:text-[#00C951]"
                  : "font-normal text-gray-700 dark:text-gray-300"
              }
            `}
          >
            <span className="text-2xl">{category.icon}</span>
            <div className="text-nowrap text-sm mt-2">{category.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCarousel;