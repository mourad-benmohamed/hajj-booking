"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import ThemeToggleButton from "./ThemeToggleButton";

const MobileNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navbar Header */}
      <header
        className={
          "lg:hidden dark:bg-gray-900 bg-white flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 " +
          `${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50"
              : "bg-transparent"
          }`
        }
      >
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center">
            <svg className="w-6 h-6" viewBox="0 0 30 25" fill="none">
              <path
                strokeWidth="0"
                d="M29.577 8.298C29.567 7.967 29.557 7.636 29.554 7.304C29.534 5.72 29.47 4.426 29.347 3.231C29.288 2.608 29.2 2.051 29.08 1.507L29.097 1.599C29.026 1.16 28.859 0.769 28.619 0.435L28.625 0.443C28.534 0.331 28.414 0.246 28.275 0.201L28.27 0.2C27.966 0.074 27.613 0 27.242 0C26.711 0 26.215 0.151 25.795 0.413L25.807 0.406C25.11 0.947 24.642 1.756 24.558 2.676L24.557 2.689L24.047 7.696C23.755 7.542 23.409 7.451 23.041 7.451C22.18 7.451 21.435 7.948 21.078 8.672L21.072 8.685L19.519 11.378L16.566 14.199C16.515 14.247 16.471 14.302 16.436 14.363L16.434 14.366L15.602 15.806L15.171 15.557C15.156 15.548 15.138 15.549 15.122 15.541C15.029 15.495 14.919 15.468 14.803 15.468C14.687 15.468 14.576 15.495 14.479 15.544L14.483 15.542C14.468 15.549 14.451 15.549 14.436 15.557L14.354 15.604L14.34 15.612L14.005 15.805L13.174 14.365C13.137 14.301 13.093 14.246 13.042 14.198L10.089 11.377L8.533 8.684C8.23 8.119 7.721 7.698 7.109 7.516L7.092 7.512C6.932 7.468 6.747 7.442 6.557 7.442C6.191 7.442 5.847 7.536 5.548 7.701L5.559 7.696L5.052 2.7C4.968 1.763 4.499 0.95 3.806 0.411L3.799 0.406C3.391 0.151 2.896 0 2.365 0C1.995 0 1.642 0.073 1.32 0.207L1.338 0.2C1.194 0.246 1.073 0.331 0.984 0.442L0.983 0.443C0.742 0.78 0.572 1.183 0.503 1.62L0.501 1.636C0.401 2.078 0.316 2.623 0.264 3.177L0.26 3.232C0.136 4.429 0.071 5.723 0.053 7.304C0.049 7.631 0.039 7.958 0.03 8.286C0.011 8.601 0 8.968 0 9.339C0 10.04 0.0390001 10.732 0.116 11.413L0.108 11.33C0.466 13.811 1.692 15.955 3.462 17.487L3.475 17.498C4.522 18.328 5.446 19.234 6.266 20.228L6.291 20.259L5.694 20.604C5.468 20.736 5.319 20.978 5.319 21.254C5.319 21.392 5.356 21.522 5.421 21.633L5.419 21.629L7.024 24.41C7.123 24.58 7.283 24.706 7.474 24.758L7.479 24.759C7.536 24.775 7.602 24.784 7.67 24.784H7.673H7.675C7.812 24.784 7.941 24.747 8.052 24.682L8.048 24.684L14.804 20.783L21.557 24.684C21.664 24.747 21.793 24.784 21.93 24.784H21.932C21.932 24.784 21.934 24.784 21.936 24.784C22.003 24.784 22.069 24.775 22.131 24.757L22.126 24.758C22.322 24.705 22.483 24.579 22.581 24.412L22.583 24.408L24.188 21.627C24.251 21.519 24.288 21.39 24.288 21.252C24.288 20.975 24.138 20.734 23.916 20.604L23.912 20.602L23.315 20.258C24.167 19.226 25.097 18.315 26.115 17.509L26.153 17.48C27.925 15.94 29.142 13.802 29.489 11.384L29.495 11.331C29.565 10.732 29.605 10.039 29.605 9.336C29.605 8.971 29.594 8.609 29.573 8.249L29.575 8.299L29.577 8.298ZM4.428 16.341C2.936 15.028 1.907 13.22 1.601 11.175L1.595 11.128C1.534 10.59 1.5 9.966 1.5 9.334C1.5 8.981 1.511 8.631 1.532 8.284L1.53 8.332C1.541 7.995 1.551 7.658 1.554 7.321C1.571 5.787 1.634 4.537 1.753 3.387C1.804 2.833 1.881 2.337 1.988 1.851L1.973 1.933C1.999 1.815 2.032 1.67 2.071 1.554C2.17 1.524 2.284 1.506 2.402 1.506C2.609 1.506 2.803 1.56 2.971 1.654L2.965 1.651C3.299 1.947 3.521 2.365 3.56 2.834V2.841L4.273 9.861C4.285 9.972 4.319 10.074 4.372 10.163L4.37 10.159L4.772 10.855L7.587 15.732C7.718 15.964 7.962 16.117 8.242 16.117C8.656 16.117 8.992 15.781 8.992 15.367C8.992 15.225 8.952 15.092 8.884 14.978L8.886 14.981L6.071 10.104C5.755 9.555 5.942 9.186 6.224 9.024C6.5 8.861 6.918 8.883 7.235 9.432L8.844 12.218C8.881 12.282 8.925 12.337 8.975 12.385L11.928 15.207L12.705 16.553L7.594 19.503C6.655 18.316 5.615 17.277 4.465 16.37L4.425 16.34L4.428 16.341ZM21.658 23.009L15.183 19.269C15.167 19.26 15.149 19.26 15.132 19.252C15.074 19.222 15.006 19.199 14.934 19.186L14.93 19.185C14.905 19.182 14.876 19.179 14.846 19.179C14.832 19.178 14.816 19.178 14.8 19.178C14.747 19.178 14.695 19.184 14.645 19.194L14.65 19.193C14.613 19.203 14.581 19.213 14.551 19.225L14.556 19.223C14.51 19.234 14.471 19.247 14.433 19.263L14.438 19.261L7.95 23.007L7.095 21.527L14.806 17.076L22.515 21.527L21.658 23.009ZM28.011 11.128C27.704 13.21 26.684 15.012 25.212 16.313L25.203 16.321C24.005 17.264 22.958 18.31 22.042 19.465L22.012 19.504L16.901 16.554L17.679 15.208L20.632 12.386C20.683 12.338 20.727 12.283 20.763 12.222L20.765 12.219L22.37 9.433C22.481 9.212 22.67 9.043 22.9 8.96L22.907 8.958C22.954 8.945 23.009 8.938 23.065 8.938C23.182 8.938 23.292 8.97 23.387 9.026L23.384 9.024C23.665 9.186 23.853 9.555 23.534 10.104L20.72 14.981C20.656 15.089 20.618 15.219 20.618 15.359C20.618 15.774 20.954 16.11 21.369 16.11C21.647 16.11 21.889 15.959 22.019 15.735L22.021 15.731L25.236 10.158C25.288 10.072 25.323 9.971 25.333 9.862V9.859L26.05 2.827C26.094 2.359 26.311 1.948 26.636 1.655L26.638 1.654C26.801 1.561 26.997 1.506 27.205 1.506C27.323 1.506 27.437 1.524 27.545 1.557L27.537 1.555C27.572 1.661 27.609 1.799 27.638 1.939L27.643 1.965C27.732 2.36 27.807 2.846 27.852 3.34L27.855 3.387C27.972 4.534 28.037 5.784 28.054 7.322C28.058 7.663 28.068 8.004 28.077 8.345C28.097 8.645 28.108 8.995 28.108 9.347C28.108 9.975 28.073 10.594 28.004 11.204L28.011 11.129V11.128Z"
                className="fill-black dark:fill-white"
                stroke="white"
              />
              <path
                strokeWidth="0.7"
                d="M13.0006 2.89844C11.0037 4.5 13 10.5 17.5006 6.89844"
                className="stroke-black dark:stroke-white fill-black dark:fill-white"
                strokeLinecap="round"
              />
              <path
                strokeWidth="0.7"
                d="M15 5L15 4.99991"
                className="stroke-black dark:stroke-white fill-black dark:fill-white"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Theme Toggle (visible when menu is closed) */}
        {!isMobileMenuOpen && <ThemeToggleButton />}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <svg className="w-8 h-8" viewBox="0 0 30 25" fill="none">
                <path
                  className="fill-black dark:fill-white"
                  stroke="currentColor"
                  d="M29.577 8.298C29.567 7.967..."
                />
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggleButton />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 focus:outline-none text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Form */}
          <form className="flex items-center border-b border-gray-200 dark:border-gray-700 p-4">
            <FiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search package"
              className="bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none text-sm border-none py-1 w-full text-gray-900 dark:text-white"
            />
          </form>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-4">
              {["About", "How it works", "Support"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block py-3 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full py-3 px-6 rounded-full bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-white dark:text-gray-900 font-medium">
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
