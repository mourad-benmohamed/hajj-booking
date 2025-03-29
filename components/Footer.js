"use client";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 md:pt-16 lg:pt-24 relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between border-b pb-8 border-gray-100 dark:border-gray-800 gap-16">
          {/* Company Section */}
          <div className="text-sm">
            <h2 className="text-gray-400 dark:text-gray-500 font-medium mb-4">
              COMPANY
            </h2>
            <ul className="space-y-5">
              {["About", "How it works", "Support", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                      href={"#"}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-sm">
            <h2 className="text-gray-400 dark:text-gray-500 font-medium mb-4">
              CONTACT
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-full p-2">
                  <IoLocationSharp className="text-green-500 dark:text-green-400 w-5 h-5" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Morocco, Rabat
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Link
                  className="flex items-center gap-3 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200"
                  href={"https://web.whatsapp.com/send?phone=212642899597"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-gray-200 dark:border-gray-700 rounded-full p-2">
                    <RiWhatsappFill className="text-green-500 dark:text-green-400 w-5 h-5" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    +212642899597
                  </p>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Link
                  className="flex items-center gap-3 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200"
                  href={"mailto:saadazzouzi4@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-gray-200 dark:border-gray-700 rounded-full p-2">
                    <MdMarkEmailUnread className="text-green-500 dark:text-green-400 w-5 h-5" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    saadazzouzi4@gmail.com
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="mx-auto md:mx-0 md:ml-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Download app
            </h2>
            <ul className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-3">
              <li>
                <Link
                  href={"http://www.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/googlePlay.png"
                    alt="Google Play download button"
                    className="w-32 md:w-36 hover:opacity-90 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"http://www.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/appStore.png"
                    alt="App Store download button"
                    className="w-32 md:w-36 hover:opacity-90 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 text-xs text-gray-600 dark:text-gray-400 text-center lg:text-left">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Links */}
            <ul className="flex flex-wrap gap-4 mx-auto lg:mx-0">
              <li>
                <Link
                  href={"#"}
                  className="hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                >
                  Data Protection Policy
                </Link>
              </li>
            </ul>

            {/* Copyright */}
            <div className="md:text-right mt-3 md:mt-0">
              <Link
                href={"#"}
                className="hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
              >
                &copy; 2025, All Rights Reserved by Mourad BENMOHAMED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
