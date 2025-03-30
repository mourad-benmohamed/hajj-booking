"use client";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaStar, FaFlag } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
import { TbCarFilled } from "react-icons/tb";
import { BiSolidChart } from "react-icons/bi";

const PackagesCard = ({ imageSrc, title, price, lastPrice, stars, buttonText, popular }) => {
  /* 
  created by Mourad Benmohamed
  @example
  <PackagesCard
    imageSrc="/path/to/image.jpg"
    title="Umrah Package: Makkah and Madina Exploration"
    price={1299}
    lastPrice={1599}
    stars={4.5}
  />

  This component renders a detailed travel package card with the following features :
    - Responsive image display
    - Package duration and popularity badges
    - Location and star rating information
    - Package inclusions (Flights, Transfer, Hotels, Activities)
    - Pricing details with original and current prices
    - Call-to-action "View Details" button
  */

  const packageOptions = React.useMemo(() => [
    { icon: MdFlight, label: 'Flights' },
    { icon: TbCarFilled, label: 'Transfer' },
    { icon: RiHotelFill, label: 'Hotels' },
    { icon: BiSolidChart, label: 'Activities' }
  ], []);

  return (
    <div
      className="shadow-xl rounded-3xl bg-white dark:bg-gray-800 p-2 max-w-[380px] md:min-w-[380px] lg:min-w-[410px] transition-colors duration-300"
      aria-label={`Travel Package: ${title}`}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          className="rounded-[16px] aspect-square h-[200px] md:h-[300px] w-full object-cover object-left-bottom"
          src={imageSrc}
          alt={`Image for ${title}`}
          loading="lazy"
          width="410"
          height="300"
        />

        {/* Duration Badge */}
        <div
          className="absolute top-2 right-2 md:top-4 md:right-4 rounded-full bg-white dark:bg-gray-700 py-2 px-3 md:py-3 md:px-4 shadow-lg shadow-gray-700/30 dark:shadow-black/40"
          aria-hidden="true"
        >
          <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
            2 Days 3 Nights
          </p>
        </div>

        {/* Popular Badge */}
        {popular && (
          <div
            className="absolute bottom-2 left-2 md:bottom-4 md:left-4 rounded-full py-2 px-3 bg-black/35 dark:bg-white/50 md:py-2 md:px-3 shadow-lg shadow-gray-700/30 dark:shadow-black/40"
            aria-hidden="true"
          >
            <p className="z-3 text-xs font-medium flex items-center text-white dark:text-gray-900">
              <FaFlag className="mr-1" />
              Popular
            </p>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="px-3 md:px-4">
        {/* Title */}
        <h3
          className="w-full text-lg md:text-2xl font-bold mt-4 h-[2.5em] leading-tight line-clamp-2 overflow-hidden text-gray-900 dark:text-white"
          title={title}
        >
          {title}
        </h3>

        {/* Location and Rating */}
        <div className="flex items-center space-x-2 mt-4 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <HiOutlineLocationMarker
                aria-hidden="true"
                className="dark:text-gray-400"
              />
              <p>{"Makkah 1 night"}</p>
            </div>
            <span className="text-gray-900 dark:text-gray-400">●</span>
            <div className="flex items-center space-x-2">
              <HiOutlineLocationMarker
                aria-hidden="true"
                className="dark:text-gray-400"
              />
              <p>{"Madina 1 night"}</p>
            </div>
          </div>
          <span className="ml-auto flex items-center space-x-1 w-max">
            <FaStar className="text-orange-400" aria-hidden="true" />
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {stars}
            </p>
          </span>
        </div>

        {/* Package Options */}
        <div className="mt-2 space-x-3 flex flex-nowrap items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
          {packageOptions.map(({ icon: Icon, label }, index) => (
            <span key={index} className="flex items-center">
              <Icon className="mr-2 dark:text-gray-400" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mt-2 pt-2 md:pt-3 border-t border-neutral-100 dark:border-gray-700 flex items-center">
          <div className="flex-1/2">
            <p className="line-through text-xs text-neutral-400 dark:text-neutral-500 font-medium">
              USD {lastPrice}
            </p>
            <span className="flex items-end space-x-1 flex-nowrap font-bold md:mt-1">
              <p className="text-xs md:text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300">
                USD
              </p>
              <span className="text-lg md:text-xl text-gray-700 dark:text-white">
                {price}/
              </span>
            </span>
          </div>

          <div className="border-l border-gray-800 dark:border-gray-600 flex-1/2 pl-2 text-xs h-max text-neutral-400 dark:text-neutral-400">
            <p>
              <span className="font-bold text-neutral-800 dark:text-gray-300">
                Note
              </span>
              : Starting from per person on twin sharing
            </p>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-4 md:mt-6 mb-3 md:mb-4">
          <button
            className="cursor-pointer w-full rounded-full uppercase py-2 md:py-3 text-base text-white bg-green-500 hover:bg-green-400 dark:bg-green-600 dark:hover:bg-green-500 transition-colors duration-300"
            aria-label="View package details"
          >
            {buttonText || "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
