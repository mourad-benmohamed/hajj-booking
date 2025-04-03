'use client'
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';




const CategoriesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false,dragFree: true });
  const [activeCategory, setActiveCategory] = useState(0); // Track active category
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

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
    
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

    return (
      <div className="relative 2xl:max-w-7xl 2xl:mx-auto -top-30 mt-12 pl-6 lg:pl-8 embla overflow-hidden">
        {/* Carousel Container */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex embla__container py-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    min-w-max flex flex-col items-center px-2 py-3 rounded-full transition-all duration-300
                    cursor-pointer
                    ${
                      activeCategory === index
                        ? "text-green-500 dark:text-green-400"
                        : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                    }
                  `}
                >
                  <span className="text-2xl mb-1">{category.icon}</span>
                  <div className="text-nowrap text-sm font-medium">
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

      {canScrollPrev && <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={`
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full
          bg-white dark:bg-gray-800 shadow-md
          hover:shadow-lg focus:outline-none
          ${!canScrollPrev ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'}
        `}
        aria-label="Previous categories"
      >
        <BiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
      </button>}

      {canScrollNext && <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={`
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full
          bg-white dark:bg-gray-800 shadow-md
          hover:shadow-lg focus:outline-none
          ${!canScrollNext ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'}
        `}
        aria-label="Next categories"
      >
        <BiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
      </button>}
      </div>
    );
};

export default CategoriesCarousel;