import React from "react";
import {PERSONAL_INFO } from '../../utils/constants'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-dusty-grape-800  py-4 backdrop-blur-xl dark:bg-dusty-grape-800/80 dark:text-gray-400">
      <div className="max-w-[1320px] mx-auto px-5">
        <p className="text-center text-text-secondary font-bold text-base">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;