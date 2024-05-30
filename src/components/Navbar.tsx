"use client";
import React, { useRef, useState } from "react";
import { ModeToggle } from "./theme-toggler";
import Hamburger from "hamburger-react";
import { jetBrains } from "./fonts";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
              className={`${jetBrains.className} md:text-2xl max-md:px-10 hover:cursor-pointer md:pl-10 text-lg font-bold`}
            >
              <Link href={"/"}>INVENTORY MANAGER</Link>
            </p>
          </div>
          <div className="px-4 flex items-center">
            {/* {
              <div className="px-4 mr-5 py-1.5 rounded-lg max-md:hidden border-2 hover:bg-neutral-200 dark:border-zinc-800/30 dark:hover:bg-zinc-800">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            } */}
            <ModeToggle />
          </div>
        </nav>
      </header>
      <div>{slides && <Sidebar />}</div>
    </>
  );
};

export default Navbar;
