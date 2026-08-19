import React from "react";
import {PERSONAL_INFO } from '../../utils/constants'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-dusty-grape-800  py-4 backdrop-blur-xl dark:bg-mint-cream-400 dark:text-stone-700">
      <div className="max-w-[1320px] mx-auto px-5">
        <p className="text-center text-text-secondary font-bold text-base dark:text-stone-700">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;