"use client";
import React, { useRef, useState } from "react";
import { ModeToggle } from "./theme-toggler";
import Hamburger from "hamburger-react";
import { jetBrains } from "./fonts";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const menu = useRef(null);
  const [slides, setSlides] = useState(false);

  const closeSlide = () => {
    setSlides(false);
  };

  document.body.addEventListener("click", closeSlide);
  return (
    <>
      <header className="h-24 absolute max-md:p-5 w-full py-2 bg-neutral-50 dark:bg-zinc-700">
        <nav className="flex w-full justify-between items-center">
          <div className="flex items-center md:m-3">
            <Hamburger toggled={slides} toggle={setSlides} />
            <p
              className={`${jetBrains.className} md:text-2xl md:pl-10 text-sm font-bold`}
            >
              INVENTORY MANAGER
            </p>
          </div>
          <div className="px-8">
            <ModeToggle />
          </div>
        </nav>
      </header>
      <div>{slides && <Sidebar />}</div>
    </>
  );
};

export default Navbar;
