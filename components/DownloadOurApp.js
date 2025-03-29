'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { IoSearch } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { FaKaaba, FaHotel, FaPray, FaRobot, FaStar, FaFlag } from 'react-icons/fa';
import { PiListStarFill } from 'react-icons/pi';
import { GiMultiDirections } from 'react-icons/gi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const DownloadOurApp = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const ref = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to various animation properties
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const xLeft = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const features = [
    { icon: FaKaaba, name: 'Umrah', color: 'text-green-500' },
    { icon: PiListStarFill, name: 'Umrah Plus', color: 'text-green-500' },
    { icon: FaHotel, name: 'Hotels', color: 'text-green-500' },
    { icon: GiMultiDirections, name: 'Qibla Finder', color: 'text-green-500' },
    { icon: FaPray, name: 'Prayer Time', color: 'text-green-500' },
    { icon: FaRobot, name: 'Hajj Guide', color: 'text-green-500' }
  ];

  // Feature item animation variants
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <div className='bg-gradient-to-b from-transparent via-[#7FD893]/70 to-transparent'>
      <motion.section
        ref={ref}
        style={{ opacity, y }}
        className="relative pt-60 2xl:max-w-7xl 2xl:mx-auto select-none overflow-hidden"
      >
        <div className="flex items-center flex-col md:flex-row gap-8 md:gap-0 lg:gap-12 px-4 lg:px-26 text-center md:text-left">
          {/* Text Section */}
          <motion.div
            style={{ x: xLeft, opacity }}
            className="w-full lg:w-1/2"
          >
            <motion.h2
              style={{ y, opacity }}
              className="text-3xl lg:text-5xl font-medium dark:text-white"
            >
              Our app is now live! <br />
              Download and go!
            </motion.h2>

            <motion.div style={{ y, opacity }}>
              <p className="text-xl lg:text-3xl mt-12 dark:text-gray-300">
                Plan your Dream Hajj in minutes
              </p>
              <p className="text-xl lg:text-3xl dark:text-gray-300">
                with our stunning app!
              </p>

              <div className="mt-12 space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white capitalize w-36"
                >
                  <img
                    src="/googlePlay.png"
                    alt="google play download button"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white capitalize w-36"
                >
                  <img
                    src="/appStore.png"
                    alt="app store download button"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            style={{ x: xRight, opacity, scale }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 relative before:ring-[5px] before:ring-gray-200 dark:before:ring-gray-500 before:rounded-t-[50px] before:absolute before:inset-0 before:border-x-8 before:border-t-10 before:border-gray-700 dark:before:border-gray-950 max-w-[430px] px-6 pt-16 mx-auto rounded-t-[50px]">
              {/* Phone Notch */}
              <div className="absolute left-0 right-0 top-5">
                <div className="w-4 h-4 bg-gray-700 dark:bg-gray-950 rounded-full mx-auto"></div>
              </div>

              {/* Search Input */}
              <motion.div
                style={{ y, opacity }}
                className="relative"
              >
                <div className="absolute left-5 top-0 bottom-0 flex justify-center items-center">
                  <IoSearch className="text-xl dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search package by date"
                  className="shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-700 w-full px-14 rounded-full py-3 placeholder:text-gray-700 dark:placeholder:text-gray-300 placeholder:font-semibold text-gray-900 dark:text-white"
                />
                <div className="absolute right-5 top-0 bottom-0 flex justify-center items-center">
                  <LuSettings2 className="text-xl dark:text-gray-400" />
                </div>
              </motion.div>

              {/* Feature Grid */}
              <motion.div
                style={{ y, opacity }}
                className="grid grid-cols-3 gap-2 mt-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={featureVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFeature(feature)}
                    className={`text-center bg-white dark:bg-gray-700 shadow-lg shadow-gray-100 dark:shadow-gray-900 p-4 rounded-2xl cursor-pointer ${feature.color}`}
                  >
                    <feature.icon className="w-5 h-5 mx-auto" />
                    <p className="mt-1 text-xs text-nowrap text-gray-600 dark:text-gray-300 font-medium">
                      {feature.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Umrah Packages Section */}
              <motion.div
                style={{ y, opacity }}
                className="flex justify-between py-4"
              >
                <h2 className="text-lg font-semibold dark:text-white">
                  Umrah Packages
                </h2>
                <button className="text-green-500 dark:text-green-400 text-sm">
                  See all
                </button>
              </motion.div>

              {/* Package Card */}
              <motion.div
                style={{ y, opacity, scale }}
                className="shadow-xl rounded-t-3xl bg-white dark:bg-gray-700 p-2 w-full"
              >
                {/* Package Image */}
                <div className="relative">
                  <motion.img
                    style={{ scale, opacity }}
                    className="relative rounded-2xl aspect-square h-[240px] w-full object-cover object-left-bottom"
                    src="https://media.istockphoto.com/id/891971560/fr/photo/mecque-kaaba.webp?a=1&b=1&s=612x612&w=0&k=20&c=k8ONieosds6PFIrkBhOkTgL9fHmKxAL774NBX4J-GzA="
                    alt="offer photo"
                    loading="lazy"
                  />
                  <motion.div
                    style={{ x: y, opacity }}
                    className="absolute top-2 right-2 md:top-4 md:right-4 rounded-full bg-white dark:bg-gray-600 py-2 px-3 md:py-3 md:px-4 shadow-lg shadow-gray-700/30 dark:shadow-gray-900/30"
                  >
                    <p className="text-xs font-semibold dark:text-white">
                      2 Days 3 Nights
                    </p>
                  </motion.div>
                  <motion.div
                    style={{ x: y, opacity }}
                    className="absolute bottom-2 left-2 md:bottom-4 md:left-4 rounded-full py-2 px-3 bg-black/35 dark:bg-white/50 md:py-2 md:px-3 shadow-lg shadow-gray-700/30 dark:shadow-gray-900/30"
                  >
                    <p className="z-3 text-xs font-medium flex items-center text-white dark:text-gray-950">
                      <FaFlag className="mr-1" />
                      Popular
                    </p>
                  </motion.div>
                </div>

                {/* Package Details */}
                <div className="px-3 md:px-4">
                  <motion.h3
                    style={{ y, opacity }}
                    className="w-full text-left text-sm font-bold mt-4 leading-tight line-clamp-2 overflow-hidden dark:text-white"
                  >
                    Umrah pilgrimage - concludes in Madinah
                  </motion.h3>

                  <motion.div
                    style={{ y, opacity }}
                    className="flex items-center space-x-2 mt-2 mb-4 text-[11px] lg:text-xs text-neutral-400 dark:text-gray-400"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <HiOutlineLocationMarker className="dark:text-gray-500" />
                        <p>Makkah 1 night</p>
                      </div>
                      <span className="text-gray-900 dark:text-gray-400">●</span>
                      <div className="flex items-center space-x-2">
                        <HiOutlineLocationMarker className="dark:text-gray-500" />
                        <p>Madinah 1 night</p>
                      </div>
                    </div>
                    <span className="ml-auto flex items-center space-x-1 w-max">
                      <FaStar className="text-orange-400" />
                      <p className="font-semibold text-gray-900 dark:text-white">
                        4.95
                      </p>
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature Modal */}
        <AnimatePresence>
          {activeFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setActiveFeature(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center max-w-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <activeFeature.icon
                  className={`${activeFeature.color} w-16 h-16 mx-auto mb-4`}
                />
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  {activeFeature.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed information about {activeFeature.name} feature will
                  be shown here.
                </p>
                <button
                  onClick={() => setActiveFeature(null)}
                  className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
};

export default DownloadOurApp;